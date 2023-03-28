var express = require('express');
var router = express.Router();
const { models } = require('../../sequelize');
const bcrypt     = require('bcrypt');
const jwt        = require('jsonwebtoken');
const userRouter = require('./user');

router.get('/', function(req, res, next) {
	res.status(404).send('404 - Not found');
});

router.post('/', async function(req, res, next) {

	try{

		// Validate body input
		var user_id      = String(req.body.user_ID).toLowerCase();
		var access_token = req.body.accessToken;

		if(user_id && access_token){
			
			// Search User By ID   
			var user_reg = await models.Users.findOne({ where: { user_ID: user_id } });

			if(user_reg !== null){
				// Unvalidated token 
				var unvalidateToken = 'LogOut:'+access_token;

				const UpBody = {"access_token" : unvalidateToken};

				// Update User access_token in DB
				const update_token = await models.Users.update(UpBody, { where: {id: user_reg.id}});
				res.status(200).json({"id": user_reg.id, "user_id": user_id});	
			}else{
				res.status(400).send(`Incorrect username or password.`);	
			}

		}else{
			res.status(400).send(`Bad request: param user_id and param access_token are required`);
		}
	} catch(err) {
		next(err);
	}

});

async function hashPassword(plaintextPassword){
	const hash = await bcrypt.hash(plaintextPassword,10);
	return hash;
}

async function hashValidatePassword(plaintextPassword, hashSavedPassword){
	const isPassword = await bcrypt.compare(plaintextPassword, hashSavedPassword);
	return isPassword;
}

function createToken(user_id, user_email){
	const token = jwt.sign({user_ID: user_id, user_email}, 
									process.env.TOKEN_KEY,
									{
										expiresIn: "2h"
									});
	return token;
}

module.exports = router;