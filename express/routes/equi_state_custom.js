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

  const equi_states = await models.Equi_States.findAll(
    { where: { 
      local_num: local_area_id, 
      controller_local_area_id: controller_la_id,
      is_deleted: false} }
  );

  if (equi_states) {
    
    let modEqui_state = await 
    
    equi_states.map( async (equi_state,row)  =>{
      try {
        // -- Find Equipments related
        const equipment = await models.Equipments.findOne(
          { where: {
            equi_state_id: equi_state.id,
            is_deleted: false
          }
        });
        Object.assign(equi_state.dataValues,{map_x: equipment.map_x});
        Object.assign(equi_state.dataValues,{map_y: equipment.map_y});
        //Object.assign(equi_state.dataValues,{equipment: equipment});
        console.log(Object.keys(equi_state.dataValues));

      } catch (err){
        next(err);
      } 
      
      modEqui_state.push(equi_state);
    });

    res.status(200).json(modEqui_state);    

  } else {
    res.status(404).json('404 - Not Found');
  }

}


module.exports = router;