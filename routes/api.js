let express = require('express');
let router = express.Router();
let Location = require('../models/location');

router.post('/publish', function(req, res, next) {
    let message = req.body;
    if (message._type !== 'location') {
        res.sendStatus(400);
        return;
    }
    console.log(message);

    let topic = message.topic;
    topic = topic.substring(topic.indexOf('/'));

    Location.create({
        latitude: message.lat,
        longitude: message.lon,
        deviceId: topic
    });

    res.sendStatus(200);
});

module.exports = router;
