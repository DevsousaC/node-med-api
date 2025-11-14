'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pagamento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pagamento.init({
    valor_pago: DataTypes.DECIMAL,
    forma_pagamento: DataTypes.STRING,
    consulta_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Pagamento',
  });
  return Pagamento;
};