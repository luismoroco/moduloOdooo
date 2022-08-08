import { DataTypes } from 'sequelize';
import { ORM } from '../db/db.config.js';

export const Asegu = ORM.define('Asegu', {
	id: {
		type: DataTypes.INTEGER,
		primaryKey: true,
		autoIncrement: true
	},
  name: {
    type: DataTypes.STRING
  },
  descripcion: {
    type: DataTypes.STRING
  },
  monto: {
    type: DataTypes.FLOAT
  }
}, {
	freezeTableName: true,
	timestamps: false,
	tableName: 'Aseguradora'
});
