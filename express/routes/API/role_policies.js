const { models } = require('../../../sequelize');
const { getIdParam } = require('../../helpers');

async function getAll(req, res) {
	const roles = await models.Role_Policies.findAll({where: {is_deleted: false}});
}

async function getById(req, res) {
	const id = getIdParam('req: ', req);
	const permissiosRol = await models.Role_Policies.findByPk(id);
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
		await models.Role_Policies.create(req.body);
		res.status(201).end();
	}
}

async function update (req, res) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param mateches the body `id`
	if(req.body.id === id) {
		await models.Role_Policies.update( req.body, {
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
	if(req.body.id === id) {
    var body = { "is_deleted": true };
		await models.Role_Policies.update( body,{
			where: {
				id: id
			}
		});
    res.status(200).end('Sucessfully Deleted');
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
