var express = require ('express');
var router = express.Router();
const { models } = require('../../sequelize');
const { getUserRoles, getUserIDfromString,
        getUserWideAreas, getUserLocalAreas  } = require('./commons');

router.post('/', function(req, res, next) {
  res.status(404).send('404 - Not found');
});

router.get('/', async function(req, res, next) {
  try {
    /* Validate body input */
    var user_name = req.headers.user_id;
    var access_token = req.headers.access_token;

    var user_id = 0, roles = {};
    var wide_areas  = {}, local_areas = {}, local_per_warea = [];

    if (user_name && access_token){
      // Get User ID
      const getUser_id = await getUserIDfromString(user_name);
      if(getUser_id){
        user_id = getUser_id;
      } else res.status(400).send(`Bad request: User does not exists`);

      // Check user roles
      const getRoles = await getUserRoles(user_id);
      if(roles) {
        roles = getRoles;
      } else res.status(400).send(`Bad request: User has no roles registered`);
      
      // Search wide Areas that user have access
      const getWideAreas = await getUserWideAreas(user_id);
      if(getWideAreas) {
        wide_areas = getWideAreas;
      } else res.status(400).send(`Bad request: User has no wide areas associations`);

      // Search local Areas that user have access
      const getLocalAreas = await getUserLocalAreas(user_id);
      if(getLocalAreas) {
        local_areas = getLocalAreas;
      } else res.status(400).send(`Bad request: User has no local areas associations`);

      // Local Areas per Wide Area
      wide_areas.map(warea => {
        let localsAreas = [];
        local_areas.some(larea => {
          if(larea.wide_area_id == warea.id){
            localsAreas.push(larea);
          }
        });
        Object.assign(warea.dataValues,{locals : localsAreas});
      });

      // Summay and response
      let body = {
        'user_id': user_id,
        'roles': roles,
        'wide_areas': wide_areas,
        'local_areas': local_areas
      }

      return res.status(200).json(body);

    } else {
      res.status(400).send(`Bad request:  param User ID and param Access Token are required`)
    }

  } catch(err) {
    next(err);
  }
});

module.exports = router;
