import { DataTypes } from 'sequelize';
import { ORM } from '../db/db.config.js';

export const Detalles = ORM.define('Detalles', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idPres: {
    type: DataTypes.INTEGER
  },
  num_cuota: {
    type: DataTypes.INTEGER
  },
  fechapago: {
    type: DataTypes.DATEONLY
  },
  pago_mensual: {
    type: DataTypes.FLOAT
  },
  capital: {
    type: DataTypes.FLOAT
  },
  estado: {
    type: DataTypes.TINYINT
  },
  pago: {
    type: DataTypes.FLOAT
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'Prestamo_details'
});
