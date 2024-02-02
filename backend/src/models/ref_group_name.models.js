const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db.js");

class ref_group_name extends Model {}
ref_group_name.init(
  {
    group_code: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    group_name: {
      type: DataTypes.STRING,
    },
    group_id: {
      type: DataTypes.STRING,
    },
    created_datetime: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "ref_group_name",
    tableName: "ref_group_name",
    schema: "public",
  }
);

module.exports = ref_group_name;
