const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
    sequelize = new Sequelize(precess.env.JAWSDB_URL);
} else {
    sequelize = new Sequelize(
        precess.env.DB_NAME,
        precess.env.DB_USER,
        precess.env.DB_PASSWORD,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306
        }
    )
}

module.exports = sequelize;