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

// get a single entry
stationController.prototype.get = (async (req, res) => {
    let station = await Station.findById(req.params.id);
    res.json(station);
});

// update a single entry
stationController.prototype.update = (async (req, res) => {
    let station = await Station.findById(req.body.id);
    station.actual = req.body.actual || station.actual;
    station.target = req.body.target || station.target;
    await station.save();
    res.json(station);
});

// delete a single entry
stationController.prototype.delete = (async (req, res) => {
    await Station.findByIdAndRemove(req.body.id);
    res.json({message: 'Station deleted'});
});

module.exports = new stationController();