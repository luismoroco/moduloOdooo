import { DataTypes } from 'sequelize';
import { ORM } from '../db/db.config.js';

export const Cliente = ORM.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING
  },
  apellidos: {
    type: DataTypes.STRING
  },
  direccion: {
    type: DataTypes.STRING
  },
  doc_identifi:{
    type: DataTypes.STRING
  },
  contacto: {
    type: DataTypes.STRING
  },
  correo: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'Clientes'
});
