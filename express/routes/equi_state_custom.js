var express = require('express');
var router  = express.Router();
const { models } = require('../../sequelize');

router.get('/', function(req, res, next){
  res.status(404).send('404 - Not Found');
});

router.get('/:local_area/:controller_la_id', function(req, res, next){
  try {
    byLocalAreaAndControllerID(req, res, next);
  } catch (err){
    next(err);
  }
});

async function byLocalAreaAndControllerID(req, res, next) {
  const local_area_id    = req.params.local_area;
  const controller_la_id = req.params.controller_la_id;

  let equi_states = [];
  let modEqui_state = [];
  let reqEqui_states;
  
  try {
    equi_states = await models.Equi_States.findAll(
      { where: { 
        local_num: local_area_id, 
        controller_local_area_id: controller_la_id,
        is_deleted: false },
        include: [{model: models.Equipments}],
        order: [['equi_num', 'ASC']] }
    );

    if (equi_states && equi_states.length != 0) {
        return res.status(200).json(equi_states);  //<- Return with equipment
    }

  } catch(err) {
    next(err)
  } finally {
    console.log("I am returning----------------------------------------------");      
  // return res;
  } 
  
}

module.exports = router;