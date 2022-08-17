import { Sequelize } from 'sequelize';

export const ORM = new Sequelize('ODOO_PRESTAMOS_Fv2', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});
