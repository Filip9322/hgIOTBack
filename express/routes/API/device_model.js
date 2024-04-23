const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll (req, res) {
  const device_models = await models.Device_Models.findAll(
    {where: {is_deleted: false}});
  res.status(200).json(device_models);
}

async function getById (req, res) {
  const id = getIdParam(req);
  const device_models = await models.Device_Models.findByPk(id);

  if(device_models) {
    res.status(200).json(device_models);
  } else {
    res.status(404).json('404 - Not found');
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
  // We only accept an UPDATE request if the `:id` param matches the body `id` from the body
  if(req.body.id === id) {
    await models.Device_Models.update(req.body, {
      where: {
        id: id
      }
    });
    res.status(200).end();
  } else {
    res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id})`);
  }
}

async function remove(req, res) {
  const id = getIdParam(req);

  if(req.body.id === id) {
    let body = {'is_deleted': true};
    await models.Device_Models.update(body, {where: {id: id}});
    res.status(200).end();
  } else {
    res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id})`)
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
}