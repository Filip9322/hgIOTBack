const { models } = require('../../sequelize');

/* Get the user Id based on the string nickname
  * 1. search and return user id based on user_name
*/
const getUserIDfromString = async (user_name = '' )=> {
  let user_reg = await models.Users.findOne({ where: { user_ID: user_name } });

  if (user_reg !== null) {
    /* return user ID */
    return user_reg.id;

  } else return null;
};

/* Listing User roles
  * 1. User Attached roles
  * 2. Role Name
 */
const getUserRoles = async (user_ID = 0) => {
  const listRolesbyUser = await models.User_Roles.findAll({where: {user_id: user_ID}});

  if (listRolesbyUser) {
    let listRoles = [];
    for(let i = 0; i < listRolesbyUser.length; i++ ) {
      let listRolesNames = await models.Roles.findAll({where: {id: listRolesbyUser[i].role_id}});
      if(listRolesNames){
        let body = {'id': listRolesbyUser[i].role_id ,'role_name': listRolesNames[0].role_name};
        listRoles.push(body);
      }
    }
    return listRoles;

  }else return null;
};

/* Listing Wide_Areas attached to User
  *  1. User attached wide areas
 */
const getUserWideAreas = async (user_ID = 0) => {
  const listWideAreasByUser = await models.User_Wide_Areas.findAll({where: {user_id: user_ID}});

  if(listWideAreasByUser) {
    let listWideAreas = [];
    for (let i = 0 ; i < listWideAreasByUser.length; i++) {
      let wideArea = await models.Wide_Areas.findAll({where: {id: listWideAreasByUser[i].wide_area_id}});
      if(wideArea) listWideAreas.push(wideArea[0]);
    }
    return listWideAreas;

  } else return null;
};

/* Listing Local Areas attached to User
  *  1. User attached local areas
 */
const getUserLocalAreas = async (user_ID = 0) => {
  const listLocalAreasbyUser = await models.User_Local_Areas.findAll({where: {user_id: user_ID}});

  if(listLocalAreasbyUser) {
    let listLocalAreas = [];
    for(let i=0; i < listLocalAreasbyUser.length; i++) {
      let localArea = await models.Local_Areas.findAll({where: {id: listLocalAreasbyUser[i].local_area_id}});
      if(localArea) listLocalAreas.push(localArea[0]);
    }
    return listLocalAreas;

  } else return null;
};


module.exports = {
  getUserIDfromString,
  getUserRoles,
  getUserWideAreas,
  getUserLocalAreas
 };