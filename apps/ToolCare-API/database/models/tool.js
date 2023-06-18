"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tool extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tool.hasMany(models.Maintenance, {
        foreignKey: "toolId",
      });
      Tool.hasMany(models.Issue, {
        foreignKey: "toolId",
      });
      Tool.belongsTo(models.Location, {
        foreignKey: "locationId",
        targetKey: "id",
      });
      Tool.belongsTo(models.User, {
        foreignKey: "userId",
        targetKey: "id",
      });

      Tool.belongsTo(models.Category, {
        foreignKey: "categoryId",
        targetKey: "id",
      });
    }
  }
  Tool.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      locationId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      maintenanceTimes: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "Optimal",
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Tool",
    }
  );
  return Tool;
};
