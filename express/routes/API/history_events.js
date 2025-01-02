const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll (req,res) {
  // Search for all Events not deleted
  res.status(200).json('Bad Request: Currently not allowed to search for all events.')
}

async function getById (req,res) {
  const _id = getIdParam(req);
  const history_event = await models.Event_History.findOne({where:{id : _id, is_deleted: false}});

  if (history_event) {
    res.status(200).json(history_event);
  } else {
    rs.status(404).json('404 - Not Found');
  }

}

async function create (req,res) {
  console.log(Object.keys(req));

  if(req.body.id) {
    res.status(400).json('Bad request: ID should not be provided, since it is determined automatically by the db.');
  } else {
    // Add all required for creation
    /*
      local_num
      occur_time
      controller_local_area_id
      equi_num
      lora_id
      event_time
      event_gubn

      ** user_mod, is_deleted
    */
    if(req.body.inse_type && req.body.equi_num){
      await models.Event_History.create(req.boy);
      res.status(200).end();
    } else {
      res.status(400).json('Bad request: Missing inse_type, required for creating a new event.')
    }
  }
}

async function update (req,res) {0
  const _id = getIdParam(req);
  // We only accep a UPDATE request if the `:id` param matches the body `id` from the body
  if (req.body.id === id) { 
    await models.Event_History.update(req.body, {
      where: {
        id: id,
        is_deleted: false
      }
    }) 
    res.status(200).end();
  } else {
    res.status(400).json(`Bad request: param ID (${id}) does not match body ID(${req.body.id})`);
  }
}

async function remove (req,res) {
  const _id = getIdParam(req);
  // We only accep a DELETE request if the `:id` param matches the body `id` from the body
  if (req.body.id === id) { 
    let body = {'is_deleted': true };
  } else {
    await models.Event_History.update(body, {where: {id: id}});

    res.status(200).end();
    res.status(400).json(`Bad request: param ID (${id}) does not match body ID(${req.body.id})`);
  }
}


module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};