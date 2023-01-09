'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class action extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.action.belongsTo(models.step, {
        foreignKey: {
          allowNull: false
        }
      });
    }
  }
  action.init({
    contenu: DataTypes.STRING,
    idStep: DataTypes.INTEGER,
    type: DataTypes.STRING,
    answer: DataTypes.STRING,
    nextStep: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'action',
  });
  return action;
};