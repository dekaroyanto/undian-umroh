const addCustomer = require("../models/addCustomer.models");
const Customer = require("../models/customer.models");
const Ref = require("../models/ref_group.models");
const groupName = require("../models/ref_group_name.models");
const authenticateToken = require("../middleware/auth");
const encryptType = require("sha256");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");
const { Op, DATE, Sequelize } = require("sequelize");

async function getCustomer(req, res) {
  try {
    const userId = req.user.cust_id;

    // menampilkan data
    const cust = await Customer.findOne({
      where: {
        cust_id: userId,
      },
      attributes: [
        "cust_id",
        "cust_name",
        "cust_gender",
        "cust_nik",
        "birth",
        "cust_email",
        "cust_hp",
        "cust_agama",
        "cust_address",
      ],
    });

    return res.status(200).json({
      code: 0,
      result: cust,
      message: "ok",
      type: "success",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      error: "Invalid token",
    });
  }
}

// hash password

async function createHash(password) {
  const hash = crypto.createHash("sha256");
  hash.update(password);
  return hash.digest("hex");
}

// generated customer id
async function custId() {
  // Dapatkan urutan terakhir dari database
  const lastRecord = await addCustomer.findOne({
    order: [["cust_id", "DESC"]],
    attributes: ["cust_id"],
  });

  // Ambil angka dari cust_id terakhir, tambahkan 1, dan pad dengan 0
  const lastIdNumber = lastRecord
    ? parseInt(lastRecord.cust_id.substr(4), 10) + 1
    : 1;
  const newId = `CUST${lastIdNumber.toString().padStart(11, "0")}`;

  return newId;
}

async function register(req, res) {
  try {
    const {
      cust_name,
      cust_nik,
      cust_gender,
      cust_birth_place,
      cust_birth_date,
      cust_hp,
      password,
      cust_email,
      cust_agama,
      cust_address,
    } = req.body;

    // Cek duplikat group name
    const cekHp = await addCustomer.findOne({
      where: { cust_hp: cust_hp },
    });

    if (cekHp) {
      return res.status(400).json({
        code: 1,
        message: `Phone number '${cust_hp}' already exists`,
        type: "error",
      });
    }

    const pass = await createHash(password);

    const regist = await addCustomer.create({
      cust_id: await custId(),
      cust_name,
      cust_nik,
      cust_gender,
      cust_birth_place,
      cust_birth_date,
      cust_hp,
      password: pass,
      cust_email,
      cust_agama,
      cust_address,
      created_datetime: new Date(),
    });

    return res.status(200).json({
      code: 0,
      result: regist,
      message: "ok",
      type: "success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Invalid",
    });
  }
}

async function update(req, res) {
  try {
    const {
      cust_id,
      cust_name,
      cust_nik,
      cust_gender,
      cust_birth_place,
      cust_birth_date,
      password,
      cust_email,
    } = req.body;

    const pass = await createHash(password);

    const updateCust = await addCustomer.update(
      {
        cust_id: cust_id,
        cust_name: cust_name,
        cust_nik: cust_nik,
        cust_gender: cust_gender,
        cust_birth_place: cust_birth_place,
        cust_birth_date: cust_birth_date,
        password: pass,
        cust_email: cust_email,
      },
      { where: { cust_id: cust_id }, returning: true }
    );

    return res.status(200).json({
      code: 0,
      result: updateCust,
      message: "ok",
      type: "success",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      error: "Invalid",
    });
  }
}

const login = async (req, res) => {
  const { cust_hp, password } = req.body;

  try {
    const customer = await addCustomer.findOne({ where: { cust_hp } });

    //return;
    if (!customer) {
      return res.status(404).json({ error: "phone not found." });
    }

    const passwordHash = crypto
      .createHash("sha256")
      .update(password)
      .digest()
      .toString("hex");

    if (passwordHash !== customer.password.toString("hex")) {
      return res.status(401).json({ error: "Invalid password." });
    }

    const secretKey = process.env.JWT_SECRET_KEY || "^token*secret";
    const token = jwt.sign(
      { cust_id: customer.cust_id, cust_hp: customer.cust_hp },
      secretKey,
      {
        expiresIn: "1800s",
      }
    );
    const refreshToken = jwt.sign({ id: customer.id }, "^token*secret", {
      expiresIn: "1800s",
    });

    res.status(200).json({
      code: 0,
      message: "ok",
      result: {
        token,
        customerId: [customer.cust_id, customer.cust_name, customer.cust_hp],
      },
      type: "succes",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Invalid" });
  }
};

const hashService = async (req, res) => {
  try {
    const userService = await addCustomer.findAll({
      attributes: ["new_password_string"],
      where: {
        account_enabled: "Y",
        email: { [Op.not]: "" },
      },
      // limit: 3
    });
    // console.log(userService);

    // console.log(userService);
    const hashedPasswords = [];

    // const filterUser = userService.filter((item) => item.enabled === 'y');

    // console.log(filterUser);

    const mappedArray = userService.map((items) => {
      // console.log(items);
      // crypto.createHash('sha256').update(items.new_password_string).digest().toString('hex');

      return items.new_password_string;
    });
    // =====
    // function hashPassword(password) {
    // 	const salt = crypto.randomBytes(16).toString('hex');
    // 	const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha256').toString('hex');
    // 	return { salt, hash };
    // }
    // for (const password of mappedArray) {
    // 	const hashedPassword = hashPassword(password);
    // 	hashedPasswords.push(hashedPassword);
    // }
    // console.log(passwordHash);
    // let stringData = JSON.stringify(userService);
    // console.log(stringData);

    // console.log(hashedPassword);
    // console.log(mappedArray);

    function hashPassword(password) {
      // const salt = crypto.randomBytes(16).toString('hex');
      const hash = crypto
        .createHash("sha256")
        .update(password)
        .digest()
        .toString("hex");

      // const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha256').toString('hex');
      return { hash };
    }

    for (const password of mappedArray) {
      const hashedPassword = hashPassword(password);
      hashedPasswords.push(hashedPassword);
      hashedPasswords.push(password);
      // console.log(password);
    }

    res.status(200).json({ hashedPasswords });
    // res.status(200).json({ userService });

    // console.log(userService);
  } catch (error) {
    res.status(500).json({ error: "Error logging in nah." });
  }
};

async function destroy(req, res) {
  try {
    const { cust_id } = req.body;

    if (!cust_id) {
      return res.status(400).json({
        error: "cust_id is required.",
      });
    }

    // Cari dan hapus entitas berdasarkan cust_id
    const result = await addCustomer.destroy({
      where: { cust_id: cust_id },
    });

    if (result === 0) {
      // Jika tidak ada entitas yang dihapus
      return res.status(404).json({
        error: "cust_id not found.",
      });
    }

    return res.status(200).json({
      code: 0,
      message: "Deleted successfully.",
      type: "success",
    });
  } catch (error) {
    console.error("Error deleting :", error);
    return res.status(500).json({
      error: "Internal Server Error",
    });
  }
}

module.exports = {
  getCustomer,
  // viewUpdate,
  update,
  register,
  login,
  hashService,
  destroy,
};
