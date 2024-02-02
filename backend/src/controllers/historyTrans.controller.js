const { Sequelize, Op, QueryTypes, where } = require("sequelize");
const History = require("../models/history_trans.models");
const jwt = require("jsonwebtoken");

async function getHistory(req, res) {
  try {
    const custHp = req.user.cust_hp;

    const hist = await History.findAll({
      where: {
        cust_hp: custHp,
      },
      attributes: [
        "id_trans",
        "store",
        "trans_date",
        "total_amount_trans",
        "cust_hp",
        "payment_media",
        "point",
      ],
      order: [["trans_date", "DESC"]],
    });

    return res.status(200).json({
      code: 0,
      result: hist,
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
  getHistory,
};
