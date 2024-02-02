const { Model, DataTypes } = require("sequelize");
const sequelize = require("./db.js");

class ref_group extends Model {}
ref_group.init(
  {
    group_code: {
      type: DataTypes.STRING,
    },
    group_name: {
      type: DataTypes.STRING,
    },
    limit_member: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false,
    sequelize,
    modelName: "ref_group",
    tableName: "ref_group",
    schema: "public",
  }
);

module.exports = ref_group;
