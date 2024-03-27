const express = require('express');
const router = express.Router();

const { models } = require('../../sequelize');

const validateIsInteger = (integer) => {
  if( typeof parseInt(integer) === 'number' && (integer%1) === 0 ) {
    return true;
  } else {
    return false;
  }
}

router.get('/', (req, res, next) =>{
  res.status(404).send('Not found');
});

router.post('/:local_area/:device_type/create', async (req, res, next) =>{
  let  device_type_p = req.params.device_type;
  let  local_area_p  = req.params.local_area;

  if(req.body){
    try{
      let lareaControllerNo = req.body.local_area_controller_number;

      if(lareaControllerNo && validateIsInteger(lareaControllerNo)){
        const checkControllerNoExist = await models.Controllers.findOne({where: {
          device_type_id: device_type_p,
          local_area_id: local_area_p,
          local_area_controller_number: lareaControllerNo,
          is_deleted: false
        }});
        
        if(!checkControllerNoExist){
          let body = req.body;
          let error = '';

          
          if(!body.local_area_controller_number) { error = `Bad request: param local_area_controller_number was not provided.`; }
          if(!body.controller_name)              { error = `Bad request: param controller_name was not provided.`; }
          if(!body.controller_address)           { error = `Bad request: param controller_address was not provided.`; }
          if(!body.map_x || !body.map_x)         { error = `Bad request: param map_x or map_y was not provided.`; }

          if (error == ''){
            let active = false;
            let schoolZone = false;
            let is_installed = false;
            let controller_type_id = 1;

            if(body.is_active == undefined) {
              Object.assign(body,{is_active: active});
            } else { is_installed = true; }
            
            if(body.is_school_zone == undefined) Object.assign(body,{is_school_zone: schoolZone});

            if(device_type_p == 1) controller_type_id = 1;

            Object.assign(body,{local_area_id: local_area_p });
            Object.assign(body,{device_type_id: device_type_p }); // need to be adjusted for 음향신호기
            Object.assign(body,{controller_type_id: controller_type_id });
            Object.assign(body,{is_installed: is_installed });
            Object.assign(body,{has_abnormalities: false });

            try{
              const createController = await models.Controllers.create(body);
              res.status(200).json(createController);

            } catch (error) {
              res.status(400).json({code: 103, error: error});
            }

          } else {
            res.status(400).json({code: 100, message: error});
          }
          
        } else {
          res.status(400).json({code: 101, message:`Bad request: row with local_area_controller_number (${lareaControllerNo}) already exits in database.`});
        }
      } else {
        res.status(400).json({code: 100, message:`Bad request: param local_area_controller_number was not provided.`});
      }
    } catch (error) {
      console.error(error);
    }
  }
});

router.get('/:local_area/:device_type', async (req, res, next) =>{
  let device_type_p = req.params.device_type;
  let local_area_p  = req.params.local_area;

  // Validate param local-area is an integer
  if(validateIsInteger(local_area_p)){
    // Validate param device-type is an integer
    if (validateIsInteger(device_type_p)) {
      // Validate Local Area exist 
      const local_area = await models.Local_Areas.findOne({where: {id: local_area_p, is_deleted: false }});
      
      if(local_area){
        // Validate $local_area has $device_type in its subcriptions
        const larea_subs = await models.LAreas_Device_Subscriptions.findAll({where: {larea_id: local_area_p, is_deleted: false}});
        
        if(larea_subs){
          // Search for device subscription for Local Area
          let sub_id = null;
          larea_subs.map(sub => {
            if(sub.dataValues.device_type_id == device_type_p){ sub_id = sub; }
          })

          if(sub_id){
            // Search for all controllers in local area that belong to device_type
            const controllers = await models.Controllers.findAll(
              { where:{ device_type_id: device_type_p, local_area_id: local_area_p, is_deleted: false }});
            res.status(200).json(controllers);
          } else { res.status(400).send(`Bad request: Local_area (${local_area_p}) has no device (${device_type_p}) subscription.`);}
        } else { res.status(400).send(`Bad request: Local_area (${local_area_p}) has no devices subscriptions.`);}
      } else { res.status(400).send(`Bad request: Local_area (${local_area_p}) does not exists.`);}
    } else { res.status(400).send(`Bad request: param device_type (${device_type_p}) is not an integer.`);}
  } else { res.status(400).send(`Bad request: param local_area (${local_area_p}) is not an integer.`);}  
});

module.exports = router;