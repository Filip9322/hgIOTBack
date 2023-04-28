const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll (req, res) {
  const local_areas = await models.Local_Areas.findAll({where: {is_deleted: false}});
  res.status(200).json(local_areas);
}

async function getById (req, res) {
  const id = getIdParam('req: ', req);
  const local_areas = await models.Local_Areas.findByPk(id);

  if(local_areas) {
    res.status(200).json(local_areas);
  } else {
    res.status(404).send('404 - Not found');
  }
}

async function create (req, res) {
  console.log(Object.keys(req));
  if(req.body.id) {
    res.status(400).send('Bad request: ID should not be provided, since it is determined automatically by the db.')
  } else {
    await models.Local_Areas.create(req.body);
    res.status(201).end();
  }
}

async function update (req, res) {
  const id = getIdParam(id);
  // We only accept an UPDATE request if the `:id` param matches the body `id` from the body
  if (req.body.id === id) {
    await models.Local_Areas.update(req.body, {
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
  const id = getIdParam(id);
  // We only accept an DELETE request if the `:id` param matches the body `id` from the body
  if (req.body.id === id) {
    let body = {'is_deleted': true};
    await models.Local_Areas.update(body, {where: { id: id }});

    res.status(200).end();
  } else {
    res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id})`);
  }
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove
};