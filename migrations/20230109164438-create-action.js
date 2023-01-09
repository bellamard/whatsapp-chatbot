'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('actions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      contenu: {

        type: Sequelize.STRING
      },
      idStep: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'steps',
          id: 'id'
        }
      },
      type: {
        allowNull: false,
        type: Sequelize.STRING
      },
      answer: {
        allowNull: true,
        type: Sequelize.STRING
      },
      nextStep: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'steps',
          id: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('actions');
  }
};