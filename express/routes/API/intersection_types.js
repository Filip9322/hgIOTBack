const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll(req, res) {
  const inter_types = await models.IntersectionTypes.findAll({where:{is_deleted: false}});
  res.status(200).json(inter_types);
}

async function getById(req, res) {
  const id = getIdParam(req);
  const inter_types = await models.IntersectionTypes.findByPk(id);

  if(inter_types){
    res.status(200).json(inter_types);
  } else {
    res.status(404).send('404 - Not found');
  }
}

async function create(req, res) {
  console.log(Object.keys(req));
  if(req.body.id) {
    res.status(400).send('Bad request: ID should not be provided, since it is determined automatically by the db');
  } else {
    await models.IntersectionTypes.create(req.body);
    res.status(201).end();
  }
}

async function update(req, res) {
  const id = getIdParam(req);
  if(req.body.id === id) {
    await models.IntersectionTypes.update(req.body, {
      where: {
        id: id
      }
    });
    res.status(200).end();
  } else {
    res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id})`);
  }
}

async function remove (req, res) {
  const id = getIdParam(req);
  if(req.body.id === id) {
    let body = { 'is_deleted': true };
    await models.IntersectionTypes.update(body, { where: {id:id}});
    res.status(200).end();
  }else {
    res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id})`);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}