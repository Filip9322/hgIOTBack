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

router.post('/', (req, res, next) =>{
  res.status(404).send('Not found');
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
    } else { res.status(400).send(`Bad request: param device_type (${device_type_p}) is noot an integer.`);}
  } else { res.status(400).send(`Bad request: param local_area (${local_area_p}) is noot an integer.`);}  
});

module.exports = router;