var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


// Station routes
var stationController = require('../controllers/stationController');
router.post('/create', stationController.create);
router.get('/list', stationController.list);
router.get('/get/:id', stationController.get);
router.post('/update', stationController.update);
router.get('/delete/:id', stationController.delete);

module.exports = router;
