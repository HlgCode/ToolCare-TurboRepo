"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Maintenance extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association
      Maintenance.hasOne(models.purchaseOrder, {
        foreignKey: "maintenanceId",
        sourceKey: "id",
      });

      Maintenance.belongsTo(models.supplierEmployee, {
        foreignKey: "supplierEmployeeId",
        targetKey: "id",
      });

      Maintenance.belongsTo(models.Schedule, {
        foreignKey: "scheduleId",
        targetKey: "id",
      });

      Maintenance.belongsTo(models.Tool, {
        foreignKey: "toolId",
        targetKey: "id",
      });
    }
  }
  Maintenance.init(
    {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scheduleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maintenanceDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      toolId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maintenanceType: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Prevent",
      },
      frequency: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Monthly",
      },
      requireCalibration: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      supplierEmployeeId: DataTypes.INTEGER,
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Pending",
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Maintenance",
    }
  );
  return Maintenance;
};
