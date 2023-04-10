const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll(req, res) {
  const user_local_areas = await models.user_local_areas.findAll({where: {is_deleted: false}});
  res.status(200).json(user_local_areas);
}

async function getById(req, res) {
  const id = getIdParam('req: ', req);
  const user_local_areas = await models.user_local_areas.findByPk(id);
  if(user_local_areas) {
  	res.status(200).json(user_local_areas);
  } else {
  	res.status(404).end('404 - Not found');
  }
}

async function create(req, res) {
  console.log(Object.keys(req));
  if(req.body.id) {
    res.status(400).send('Bad request: ID should not be provided, since it is determined automatically by the db.');
  } else {
  	res.status(201).end();
  }
}

async function update(req, res) {
  const id = getIdParam(req);
  if (req.body.id === id){
  	await models.User_Local_Areas.update(req.body, {
  		where: {
  			id: id
  		}
  	});
  	res.status(200).end('Sucessfully Deleted');
  } else {
  	res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
  }
}

async function remove(req, res) {
  const id = getIdParam(req);
  if (req.body.id === id){
    var body = { "is_deleted": true};
  	await models.User_Local_Areas.update(body, {
  		where: {
  			id: id
  		}
  	});
  	res.status(200).end('Sucessfully Deleted');
  } else {
  	res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
  }
}

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove
};