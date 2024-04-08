const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll (req,res) {
  // Search for all Controllers not deleted
  const controllers = await models.Controllers.findAll(
    {where: {is_deleted: false}});

  res.status(200).json(controllers);
}

async function getById (req,res) {
  const _id = getIdParam(req);
  const inter_id   = await models.Intersection_Controllers.findOne({where:{controller_id: _id, is_deleted: false}})
  const controller = await models.Controllers.findOne(
    {where:{id: _id, is_deleted: false}, include: [{model: models.Intersection_Controllers }]});

  if(controller) {
    res.status(200).json(controller);
  } else {
    res.status(404).json('404 - Not found');
  }
}

async function create (req,res) {
  console.log(Object.keys(req));
  if(req.body.id) {
    res.status(400).json('Bad request: ID should not be provided, since it is determined automatically by the db.');
  } else {
    await models.Controllers.create(req.body);
    res.status(201).end();
  }
}

async function update (req,res) {
  const id = getIdParam(req);
  // We only accep a UPDATE request if the `:id` param matches the body `id` from the body
  if (req.body.id === id) {
    await models.Controllers.update(req.body, {
      where: {
        id: id,
        is_deleted: false
      }
    });
    res.status(204).end();
  } else {
    res.status(400).json(`Bad request: param ID (${id}) does not match body ID(${req.body.id})`);
  }
}

async function remove (req,res) {
  const id = getIdParam(req);
  // We only accep a DELETE request if the `:id` param matches the body `id` from the body
  if (req.body.id === id) {
    let body = {'is_deleted': true};
    await models.Controllers.update(body, {where: { id: id }});
    res.status(200).end();
  } else {
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