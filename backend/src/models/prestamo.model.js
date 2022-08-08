import { DataTypes } from 'sequelize';
import { ORM } from '../db/db.config.js';

export const Prestamo = ORM.define('Prestamo', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idAseg: {
    type: DataTypes.INTEGER
  },
  idCliente: {
    type: DataTypes.INTEGER
  },
  fecha_prestamo: {
    type: DataTypes.DATEONLY
  },
  monto: {
    type: DataTypes.FLOAT
  },
  meses: {
    type: DataTypes.INTEGER
  },
  abal: {
    type: DataTypes.STRING
  },
  penalidad: {
    type: DataTypes.FLOAT
  },
  interes: {
    type: DataTypes.FLOAT
  }
}, {
  freezeTableName: true,
  timestamps: false,
  tableName: 'Prestamo'
});
