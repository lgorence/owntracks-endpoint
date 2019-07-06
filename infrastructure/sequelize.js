let Sequelize = require("sequelize");

let dbName = process.env.DB_NAME || "owntracks_endpoint";
let dbUser = process.env.DB_USER || "postgres";
let dbPass = process.env.DB_PASS || "postgres";
let dbHost = process.env.DB_HOST || "localhost";
let dbPort = process.env.DB_PORT || 5432;

const sequelize = new Sequelize(dbName, dbUser, dbPass, {
    host: dbHost,
    port: dbPort,
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;
