const { models } = require('../../../sequelize'); 
const { getIdParam } = require('../../helpers');


async function getAll (req, res) {
	const companies = await models.Companies.findAll({where: {is_deleted: false}});
	res.status(200).json(companies);
};


async function getById(req, res) {
	const id = getIdParam(req);
	const company = await models.Companies.findByPk(id);
	if(company) {
		res.status(200).json(company);
	} else {
		res.status(404).send('404 - Not found');
	}
};

async function create (req, res){
	if (req.body.id) {
		res.status(400).send('Bad request: ID should not be provided, since it is determined automatically by the db.');
	} else {
		await models.Companies.create(req.body);
		res.status(201).end();
	}
};

async function update(req, res) {
	const id = getIdParam(req);

	// We only accept an UPDATE request if the `:id` param matches the body `id`
	if (req.body.id === id) {
		await models.Companies.update(req.body, {
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
	if (req.body.id === id) {
		var body = { "is_deleted": true};
		await models.Companies.update(body,{
			where: {
				id: id
			}
		});
		res.status(200).end("Sucessfully Deleted");
	} else {
		res.status(400).send(`Bad request: param ID (${id}) does not match body ID (${req.body.id}).`);
	}
};


module.exports = {
	getAll,
	getById,
	create,
	update,
	remove
};
