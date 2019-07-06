let Sequelize = require("sequelize");
let db = require('../infrastructure/sequelize');

let Location = db.define('location', {
    latitude: {
        type: Sequelize.FLOAT,
    },
    longitude: {
        type: Sequelize.FLOAT
    },
    deviceId: {
        type: Sequelize.STRING,
        field: 'device_id'
    }
}, {
    freezeTableName: true
});

Location.sync({force: true}).then(() => {
    console.log(`User table created`);
}).catch(err => {
    console.log(err);
});

module.exports = Location;
