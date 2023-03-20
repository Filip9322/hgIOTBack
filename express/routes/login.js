var express = require('express');
var router = express.Router();
const { models } = require('../../sequelize');
const bcrypt     = require('bcrypt');

router.get('/register', function(req, res, next) {
	res.status(403).send('Not allowed to create users by GET Request');
});

router.post('/register', async function(req, res, next) {
	var hashPass = await hashPassword(req.body.user_pw);
	req.body.user_pw = hashPass;
	models.Users.create(req.body);
	res.status(201).end();
});


async function hashPassword(plaintextPassword){
	const hash = await bcrypt.hash(plaintextPassword,10);
	return hash;
}

module.exports = router;