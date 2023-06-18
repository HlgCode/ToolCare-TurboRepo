"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
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
      Location.belongsToMany(models.User, {
        through: "userLocations",
      });

      Location.hasMany(models.Schedule, {
        foreignKey: "locationId",
      });

      Location.hasMany(models.Tool, {
        foreignKey: "locationId",
      });
    }
  }
  Location.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      adress: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      contact: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: "Location",
    }
  );
  return Location;
};
