'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Atendente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Atendente.init({
    nome: DataTypes.STRING,
    funcao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Atendente',
  });
  return Atendente;
};