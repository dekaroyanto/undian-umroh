const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db.js");

class history_trans extends Model {}
history_trans.init(
  {
    id_trans: {
      type: DataTypes.STRING,
    },
    store: {
      type: DataTypes.STRING,
    },
    trans_date: {
      type: DataTypes.DATE,
      get() {
        return require("moment")(this.getDataValue("trans_date")).format(
          "YYYY-MM-DD HH:mm:ss"
        );
      },
    },
    total_amount_trans: {
      type: DataTypes.STRING,
    },
    cust_hp: {
      type: DataTypes.STRING,
    },
    payment_media: {
      type: DataTypes.STRING,
    },
    point: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "view_history_trans",
    tableName: "view_history_trans",
    schema: "public",
  }
);

module.exports = history_trans;
