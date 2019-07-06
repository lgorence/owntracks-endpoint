let express = require('express');
let router = express.Router();
let Location = require('../models/location');

router.post('/publish', function(req, res, next) {
    let message = req.body;
    if (message._type !== 'location') {
        next();
    }

    Location.create({
        latitude: message.lat,
        longitude: message.lon,
        deviceId: message.tid
    });

    res.sendStatus(200);
});

module.exports = router;
