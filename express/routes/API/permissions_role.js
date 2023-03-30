const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll(req, res) {
	const roles = await models.Permission_by_rol.findAll();
}

async function getById(req, res) {
	const id = getIdParam('req: ', req);
	const permissiosRol = await models.Permission_by_rol.findByPk(id);
	if(permissiosRol) {
		res.status(200).json(permissiosRol);
	} else {
		res.status(404).send('404 - Not found');
	}
}

async function create (req, res) {
	console.log(Object.keys(req));
	if(req.body.id) {
		res.status(400).send('Bad request: ID should not be provided, since it is determined automatically by the db.');
	} else {
		await models.Permission_by_rol.create(req.body);
		res.status(201).end();
	}
}

async function update (req, res) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param mateches the body `id`
	if(req.body.id === id) {
		await models.Permission_by_rol.update( req.body, {
			where: {
				id: id
			}
		});
	} else{
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
}

async function remove (req, res) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param mateches the body `id`
	if(req.body.id === id) {
		await models.Permission_by_rol.destroy( req.body,{
			where: {
				id: id
			}
		});
	} else{
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
