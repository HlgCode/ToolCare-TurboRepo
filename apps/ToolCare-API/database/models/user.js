"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      /**
       * User puede pertenecer a Muchas Location, a su vez una Location tiene muchos User.
       */
      User.belongsToMany(models.Location, {
        through: "userLocations",
      });

      User.hasMany(models.Tool, {
        foreignKey: "userId",
      });

      User.hasMany(models.Issue, {
        foreignKey: "userId",
      });

      User.hasMany(models.Session, {
        foreignKey: "userId",
      });

      User.belongsTo(models.Role, {
        foreignKey: "roleId",
        targetKey: "id",
      });
    }
  }
  User.init(
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
      fullName: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      birthDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      roleId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      token: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
