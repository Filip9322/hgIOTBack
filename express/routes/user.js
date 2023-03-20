const { models } = require('../../sequelize'); 
const { getIdParam } = require('../helpers');

async function getAll (req, res) {
	const users = await models.Users.findAll();
	res.status(200).json(users);
};


async function getById(req, res) {
	const id = getIdParam('req: ',req);
	const users = await models.Users.findByPk(id);
	if(users) {
		res.status(200).json(users);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create (req, res){
	console.log(Object.keys(req));
	if (req.body.id) {
		res.status(400).send('Bad request: ID should not be provided, since it is determined automatically by the db.');
	} else {
		res.status(403).send('Not allowed to create users by the API');
	}
};

async function update(req, res) {
	const id = getIdParam(req);
	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.Users.update(req.body, {
			where: {
				id: id
			}
		});
		res.status(200).end();
	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
};

async function remove(req, res) {
	const id = getIdParam(req);
	await models.Users.destroy({
		where: {
			id: id
		}
	});
	res.status(200).end();
};

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove
};
