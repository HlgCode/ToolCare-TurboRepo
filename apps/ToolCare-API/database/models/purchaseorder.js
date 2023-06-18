"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class purchaseOrder extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      purchaseOrder.belongsTo(models.Maintenance, {
        foreignKey: "maintenanceId",
        targetKey: "id",
      });
    }
  }
  purchaseOrder.init(
    {
      serial: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      pdfDocument: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      maintenanceId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "purchaseOrder",
    }
  );
  return purchaseOrder;
};
