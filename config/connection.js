const Sequelize = require("sequelize");
require("dotenv").config();

// Create DB connection, pass in MySQL info via .env file
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: "localhost",
    dialect: "mysql",
    port: 3306
});

module.exports = sequelize;