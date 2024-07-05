var Station = require('../models/station');

function stationController(){};

// create a new station
stationController.prototype.create = (async (req, res) => {
    let station = new Station({
        actual: req.body.actual,
        target: req.body.target
    });
    await station.save();   
    res.json(station);
});

// list all entries
stationController.prototype.list = (async (req, res) => {
    let stations = await Station.find();
    res.json(stations);
});

