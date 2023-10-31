const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll(req,  res) {
  res.status(200).json('Not allowed');
}

async function getById(req, res) {
  const _id = getIdParam(req);
  const equi_state = await models.Equi_States.findOne(
    { where: { id: _id, is_deleted: false }});

  if ( equi_state ) {
    res.status(200).json(equi_state);
  } else {
    res.status(404).json('404 - Not found');
  }
}

async function create (req, res) {
  console.log(Object.keys(req));
  if(req.body.id) {
    res.status(400).json('Bad request: ID should not be provided, since it is determined automatically by the db.');
  } else {
    await models.Equi_States.create(req.body);
    res.status(201).end();
  }
}

async function update (req, res) {
  const _id = getIdParam(req);
  // We only accep a UPDATE request if the `:id` param matches the body `id` from the body
  if (req.body.id === _id) {
    await models.Equi_States.update(req.body, {
      where: {
        id: _id,
        is_deleted: false
      }
    });
    res.status(200).end();
  } else {
    res.status(400).json(`Bad request: param ID (${id}) does not match body ID(${req.body.id})`);
  }
}

async function remove (req, res) {
  const _id = getIdParam(req);
  // We only accep a UPDATE request if the `:id` param matches the body `id` from the body
  if (req.body.id === _id) {
    let body = {'is_deleted': true };
    await models.Equi_States.update(body, {where: { id: _id }});
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
}