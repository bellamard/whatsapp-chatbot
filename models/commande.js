'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class commande extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.commande.belongsTo(models.step, {
        foreignKey: {
          allowNull: false
        }
      });

    }
  }
  commande.init({
    commande: DataTypes.INTEGER,
    idStep: DataTypes.INTEGER,
    type: DataTypes.STRING,
    reponse: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'commande',
  });
  return commande;
};