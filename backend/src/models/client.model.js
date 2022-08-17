import { DataTypes } from 'sequelize';
import { ORM } from '../db/db.config.js';

export const Cliente = ORM.define('Cliente', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true  
  },
  name: {
    type: DataTypes.STRING
  },
  phone: {
    type: DataTypes.STRING
  },
  street: {
    type: DataTypes.STRING
  },
  email:{
    type: DataTypes.STRING
  },
  pass: {
    type: DataTypes.STRING
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'Clientes'
});
