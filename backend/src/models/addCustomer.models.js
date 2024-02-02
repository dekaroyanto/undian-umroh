const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db.js");

class addCustomer extends Model {}
addCustomer.init(
  {
    cust_id: {
      type: DataTypes.STRING,
      primaryKey: true,
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
    cust_birth_place: {
      type: DataTypes.STRING,
    },
    cust_birth_date: {
      type: DataTypes.DATEONLY,
    },
    cust_hp: {
      type: DataTypes.STRING,
    },
    password: {
      type: DataTypes.STRING,
    },
    cust_email: {
      type: DataTypes.STRING,
    },
    cust_group_id: {
      type: DataTypes.STRING,
    },
    cust_position: {
      type: DataTypes.STRING,
    },
    created_datetime: {
      type: DataTypes.DATE,
    },
    cust_group_name: {
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
    modelName: "customer",
    tableName: "customer",
    schema: "public",
  }
);

module.exports = addCustomer;
