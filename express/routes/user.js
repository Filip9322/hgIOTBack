const { models } = require('../../sequelize'); 
const { getIdParam } = require('../helpers');
const bcrypt         = require('bcrypt');

async function getAll (req, res) {
	const users = await models.Users.findAll();
	res.status(200).json(users);
};


async function getById(req, res) {
	const id = getIdParam(req);
	const users = await models.Users.findByPk(id);
	if(users) {
		res.status(200).json(users);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create (req, res){
	if (req.body.id) {
		res.status(400).send('Bad request: ID should not be provided, since it is determined automatically by the db.');
	} else {
		var hashPass = await hashPassword(req.body.user_pw);
		req.body.user_pw = hashPass;
		await models.Users.create(req.body);
		res.status(201).end();
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

async function hashPassword(plaintextPassword){
	const hash = await bcrypt.hash(plaintextPassword,10);
	return hash;
}

module.exports = {
	getAll,
	getById,
	create,
	update,
	remove
};
