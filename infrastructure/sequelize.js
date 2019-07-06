let Sequelize = require("sequelize");

const sequelize = new Sequelize('owntracks_endpoint', 'postgres', '', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;
