'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class step extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.step.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
      models.step.hashmany(models.commande);
      models.step.hashmany(models.action);
    }
  }
  step.init({
    name: DataTypes.STRING,
    idUser: DataTypes.INTEGER,
    type: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'step',
  });
  return step;
};