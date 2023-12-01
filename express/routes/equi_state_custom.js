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

  let modEqui_state = [];
  
  try {
    const equi_states = await models.Equi_States.findAll(
      { where: { 
        local_num: local_area_id, 
        controller_local_area_id: controller_la_id,
        is_deleted: false} }
    );

  
    if (equi_states) {  
      equi_states.map( async (equi_state,row)  =>{
        try{
          // -- Find Equipments related
          const equipment = await models.Equipments.findOne(
            { where: {
              equi_state_id: equi_state.id,
              is_deleted: false
            }
          });
          Object.assign(equi_state.dataValues,{map_x: equipment.map_x});
          Object.assign(equi_state.dataValues,{map_y: equipment.map_y});
        
          // Build a new object with rows modified
          modEqui_state.push(equi_state);
        } catch (err){ 
          next(err); 
        } finally {
          // Do not return result until being on the last row!
          if(row + 1 == equi_states.length) {
            return res.status(200).json(modEqui_state);
          }
        }
      });
    } else {
      res.status(404).json('404 - Not Found');
    }
  } catch (err){
    next(err);
  }
}


module.exports = router;