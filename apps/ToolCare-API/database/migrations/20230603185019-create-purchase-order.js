"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("purchaseOrders", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      serial: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true,
      },
      pdfDocument: {
        type: Sequelize.STRING,
      },
      maintenanceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Maintenances",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("purchaseOrders");
  },
};
