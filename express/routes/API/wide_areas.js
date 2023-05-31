const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll (req, res) {
  const wide_areas = await models.Wide_Areas.findAll({where: {is_deleted: false}});
  res.status(200).json(wide_areas);
};

async function getById(req, res) {
  const id = getIdParam(req);
  const wide_areas = await models.Wide_Areas.findByPk(id);

  if(wide_areas) {
    res.status(200).json(wide_areas);
  } else {
    res.status(404).send('404 - Not found');
  }
};

async function create (req, res) {
  console.log(Object.keys(req));
  if(req.body.id) {
    res.status(400).send('Bad request: ID should not be provided, since it is determined automatically by the db.')
  } else {
    await models.Wide_Areas.create(req.body);
    res.status(201).end();
  }
}

async function update (req, res) {
  const id = getIdParam(req);
  // We only accept an UPDATE request if the `:id`  param matches the body `id` froom the body
  if (req.body.id === id) {
    await models.Wide_Areas.update(req.body, {
      where: {
        id: id
      }
    });
    res.status(200).end('Sucessfully Updated');
  } else {
    res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`)
  }
}

async function remove (req, res) {
  const id = getIdParam(req);
  if (req.body.id === id) {
    var body = {'is_deleted': true };
    await models.Wide_Areas.update(body, {where: { id: id }});

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