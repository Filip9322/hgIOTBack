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
        is_deleted: false},
        order: [['equi_num', 'ASC']] }
    );

    if (equi_states && equi_states.length != 0) {
      
      equi_states.map( async (equi_state,row)  =>{
        var equipmentIsNull = true;
        
        try{
          // -- Find Equipments related
          const equipment = await models.Equipments.findOne(
            { 
              where: {
              equi_state_id: equi_state.id,
              is_deleted: false
              }
            }).then( equipments =>{
              if (equipments)
              {
                equipmentIsNull = false; 
                Object.assign(equi_state.dataValues,{map_x: equipments.map_x});
                Object.assign(equi_state.dataValues,{map_y: equipments.map_y});
                Object.assign(equi_state.dataValues,{sound_text: equipments.sound_text});

                // Build a new object with rows modified
                modEqui_state.push(equi_state);
              } else {
                
                Object.assign(equi_state.dataValues,{map_x: '0'});
                Object.assign(equi_state.dataValues,{map_y: '0'});
                Object.assign(equi_state.dataValues,{sound_text: '0'});

                // Build a new object with rows modified
                modEqui_state.push(equi_state);
              }
            });
        
        } catch (err){
          next(err);
        } finally {
          // Do not return result until being on the last row!
          if(modEqui_state.length == equi_states.length ) {
            return res.status(200).json(modEqui_state);  //<- Return with equipment
          } else if (modEqui_state.length == equi_states.length && equipmentIsNull) {
            return res.status(404).json('404 - Not Found'); //<- Return without equipment
          }
        }
      });
    }

  } catch(err) {
    next(err)
  } finally {
    console.log("I am returning----------------------------------------------");      
  // return res;
  } 
  
}

module.exports = router;