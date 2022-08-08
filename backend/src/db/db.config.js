import { Sequelize } from 'sequelize';

export const ORM = new Sequelize('ODOO_PRESTAMOS', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});
