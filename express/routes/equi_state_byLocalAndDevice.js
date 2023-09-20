var express = require('express');
var router  = express.Router();
const { models } = require('../../sequelize');

router.get('/', function(req, res, next){
  res.status(404).send('404 - Not Found');
});

router.get('/:local_area/:device_type', function(req, res, next){
  try {
    byLocalAreaAndDeviceType(req, res);
  } catch (err){
    next(err);
  }
});

async function byLocalAreaAndDeviceType(req, res) {
  res.status(200).json(req.params);
}

module.exports = router;