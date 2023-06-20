/* eslint-disable no-unused-vars */
"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Maintenances", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scheduleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Schedules",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      maintenanceDate: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      toolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Tools",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      maintenanceType: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Prevent",
      },
      frequency: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Monthly",
      },
      requireCalibration: {
        defaultValue: false,
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      supplierEmployeeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "supplierEmployees",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Pending",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Maintenances");
  },
};
