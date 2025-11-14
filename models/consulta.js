'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Consulta extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Consulta.init({
    data_hora: DataTypes.DATE,
    paciente_id: DataTypes.INTEGER,
    medico_id: DataTypes.INTEGER,
    atendente_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Consulta',
  });
  return Consulta;
};