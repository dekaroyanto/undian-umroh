const { Sequelize, Op, QueryTypes, where } = require("sequelize");
const CP = require("../models/customerprofile.models.js");

// get data all cp
async function getCpAll(req, res, next) {
  try {
    const { cx_id, name, contact_person, contact_no, email, cx_type } =
      req.query;
    const filter = {};

    if (cx_id) {
      filter.cx_id = { [Op.iLike]: `%${cx_id}%` };
    }
    if (name) {
      filter.name = { [Op.iLike]: `%${name}%` };
    }
    if (contact_person) {
      filter[Op.or] = [
        { contact_lname: { [Op.iLike]: `%${contact_person}%` } } || {
          contact_fname: { [Op.iLike]: `%${contact_person}%` },
        },
      ];
    }
    if (contact_no) {
      filter.contact_no = { [Op.eq]: `${contact_no}` };
    }
    if (email) {
      filter.email = { [Op.eq]: `${email}` };
    }
    if (cx_type) {
      filter.cx_type = { [Op.eq]: `${cx_type}` };
    }

    if (Object.keys(filter).length === 0) {
      res.status(200).json({
        code: 0,
        result: {
          items: [],
        },
        message: "Tidak ada data ditemukan",
        type: "success",
      });
    }

    // get all CP
    const cpAll = await CP.findAll({
      attributes: [
        "cx_id",
        "name",
        [
          Sequelize.fn(
            "CONCAT",
            Sequelize.col("contact_fname"),
            " ",
            Sequelize.col("contact_lname")
          ),
          "contact_person",
        ],
        "contact_no",
        "email",
        "cx_type",
      ],
    });

    const cp = await CP.findAll({
      where: filter,
      attributes: [
        "cx_id",
        "name",
        [
          Sequelize.fn(
            "CONCAT",
            Sequelize.col("contact_fname"),
            " ",
            Sequelize.col("contact_lname")
          ),
          "contact_person",
        ],
        "contact_no",
        "email",
        "cx_type",
      ],
    });
    res.status(200).json({
      code: 0,
      result: {
        items: cx_type === "ALL" ? cpAll : cp,
      },
      message: "ok",
      type: "success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Invalid" });
  }
}

// create Customer Profile
async function actionCreate(req, res) {
  try {
    const {
      id,
      created_by = "id_cindrawati",
      created_datetime = new Date(),
      payment_store,
      name,
      cx_id,
      invoice_title,
      cx_type,
      contact_fname,
      contact_lname,
      gender,
      contact_no,
      fax_no,
      email,
      company_phone_no,
      mail_address,
      shipping_address,
    } = req.body;

    const addcustomerprofile = await CP.create({
      id,
      created_by,
      created_datetime,
      payment_store,
      name,
      cx_id,
      invoice_title,
      cx_type,
      contact_fname,
      contact_lname,
      gender,
      contact_no,
      fax_no,
      email,
      company_phone_no,
      mail_address,
      shipping_address,
    });

    return res.status(200).json({
      code: 0,
      result: addcustomerprofile,
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

// view edit
async function viewUpdate(req, res, next) {
  try {
    const { id } = req.body;

    const filter = {};

    if (id) {
      filter.id = { [Op.eq]: `${id}` };
    }

    const cp = await CP.findAll({
      where: filter,
      attributes: [
        "payment_store",
        "name",
        "invoice_title",
        "cx_type",
        "contact_fname",
        "contact_lname",
        "gender",
        "contact_no",
        "fax_no",
        "email",
        "company_phone_no",
        "mail_address",
        "shipping_address",
      ],
    });

    res.status(200).json({
      code: 0,
      result: {
        item: cp,
      },
      message: "ok",
      type: "success",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
}

// create Customer Profile
async function actionUpdate(req, res) {
  try {
    const {
      id,
      last_updated_by = "id_cindrawati",
      name,
      invoice_title,
      cx_type,
      contact_fname,
      contact_lname,
      gender,
      contact_no,
      fax_no,
      email,
      company_phone_no,
      mail_address,
      shipping_address,
    } = req.body;

    const updatecustomerprofile = await CP.update(
      {
        last_updated_by,
        last_updated_datetime: new Date(),
        name: name,
        invoice_title: invoice_title,
        cx_type: cx_type,
        contact_fname: contact_fname,
        contact_lname: contact_lname,
        gender: gender,
        contact_no: contact_no,
        fax_no: fax_no,
        email: email,
        company_phone_no: company_phone_no,
        mail_address: mail_address,
        shipping_address: shipping_address,
      },
      { where: { id: id } }
    );

    return res.status(200).json({
      code: 0,
      result: updatecustomerprofile,
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

module.exports = {
  getCpAll,
  actionCreate,
  viewUpdate,
  actionUpdate,
};
