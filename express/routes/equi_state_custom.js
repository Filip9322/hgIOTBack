var express = require('express');
var router  = express.Router();
const { models } = require('../../sequelize');

router.get('/', function(req, res, next){
  res.status(404).send('404 - Not Found');
});

router.get('/:local_area/:controller_la_id', function(req, res, next){
  try {
    byLocalAreaAndControllerID(req, res);
  } catch (err){
    next(err);
  }
});

async function byLocalAreaAndControllerID(req, res) {
  const local_area_id    = req.params.local_area;
  const controller_la_id = req.params.controller_la_id;

  const equi_state = await models.Equi_States.findAll(
    { where: { 
      local_num: local_area_id, 
      controller_local_area_id: controller_la_id,
      is_deleted: false} }
  );

  if (equi_state) {
    res.status(200).json(equi_state);
  } else {
    res.status(404).json('404 - Not Found');
  }

}

module.exports = router;