"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class supplierEmployee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      supplierEmployee.hasMany(models.Maintenance, {
        foreignKey: "supplierEmployeeId",
      });

      supplierEmployee.belongsTo(models.supplierCompany, {
        foreignKey: "companyId",
        targetKey: "id",
      });
    }
  }
  supplierEmployee.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      idCard: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      fullname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      position: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      companyId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "supplierEmployee",
    }
  );
  return supplierEmployee;
};
