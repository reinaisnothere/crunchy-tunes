import Sequelize from 'sequelize';
import password from '../config/mysqlsetup.js'

const db = new Sequelize('crunchy', 'root', password, {
  define: {timestamps: false}
});

export default db;