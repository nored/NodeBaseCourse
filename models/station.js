var mongoose = require('mongoose');


var stationSchema = new mongoose.Schema({
    actual: {
        type: Number,
        required: true
    },
    target: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Station', stationSchema);