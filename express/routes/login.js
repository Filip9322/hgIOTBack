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
		var user_id   = String(req.body.user_ID).toLowerCase();
		var user_pass = req.body.user_pw;

		if(user_id && user_pass){
			// Search User By ID   
			var user_reg = await models.Users.findOne({ where: { user_ID: user_id } });

			if(user_reg !== null){
				// Validated password with bcrypt
				var validatePass = await hashValidatePassword(req.body.user_pw, user_reg.user_pw);
				var user_email   = user_reg.user_email;
				if( validatePass ){
					// Return Access_token
					const token  = createToken(user_id, user_email);
					const UpBody = {"access_token" : token};

					// Update User access_token in DB
					const update_token = await models.Users.update(UpBody, { where: {id: user_reg.id}});
					res.status(200).json({"id": user_reg.id, "user_id": user_id,  "access_token": token, "status": `User Authenticated: `});
				}else {
					res.status(400).send(`Incorrect username or password.`);
				}
			}

		}else{
			res.status(400).send(`Bad request: param user_id and param user_pass are required`);
		}
	} catch(err) {
		next(err);
	}

});

router.get('/register', function(req, res, next) {
	res.status(403).send('Not allowed to create users by GET Request');
});

router.post('/register', async function(req, res, next) {

	try{
		
		// Validate user input
		var user_id    = req.body.user_ID;
		var user_email = req.body.user_email;
		
		// Validate if user already exist by User_ID
		var user_reg = await models.Users.findOne({ where: { user_ID: user_id } });

		if(user_id && user_reg === null){
			
			// Encrypt user password
			var hashPass = await hashPassword(req.body.user_pw);
			req.body.user_pw = hashPass;
			req.body.user_ID    = String(req.body.user_ID).toLowerCase();
			req.body.user_email = String(req.body.user_email).toLowerCase();
			
			// Create User Token
			const token = createToken(user_id, user_email);
			req.body.access_token = token;

			//  Validate User Model & Create
			const new_user = models.Users.create(req.body);
			
			// Return New user
			res.status(201).json({"id": new_user.id, "user_id": user_id,  "access_token": token});
		}else {
			res.status(400).send(`User ID ${user_id} is already Registered.`);
		}
	} catch(err) {
		next(err);
	}
});

router.get('lost_password', async function(req, res, next) {
	res.status(403).send('Not allowed to recover password by GET Request');
});

router.post('lost_password', async function(req, res, next) {
	// TODO Functionality to recover password
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