const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db.js");

class Customer extends Model {}
Customer.init(
  {
    cust_id: {
      type: DataTypes.STRING,
    },
    cust_name: {
      type: DataTypes.STRING,
    },
    cust_nik: {
      type: DataTypes.STRING,
    },
    cust_gender: {
      type: DataTypes.STRING,
    },
    birth: {
      type: DataTypes.STRING,
    },
    cust_hp: {
      type: DataTypes.STRING,
    },
    cust_email: {
      type: DataTypes.STRING,
    },
    cust_agama: {
      type: DataTypes.STRING,
    },
    cust_address: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "view_customerx",
    tableName: "view_customerx",
    schema: "public",
  }
);

module.exports = Customer;
