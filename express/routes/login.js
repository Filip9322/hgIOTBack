var express = require('express');
var router = express.Router();
const { models } = require('../../sequelize');
const bcrypt     = require('bcrypt');
const jwt        = require('jsonwebtoken');
const userRouter = require('./user');


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
			
			// Create User Token
			const token = jwt.sign({user_ID: user_id, user_email}, 
									process.env.TOKEN_KEY,
									{
										expiresIn: "2h"
									});
			req.body.access_token = token;

			//  Validate User Model & Create
			models.Users.create(req.body);
			
			// Return New user
			res.status(201).json(token);
		}else {
			res.status(400).send(`User ID ${user_id} is already Registered.`);
		}
	} catch(err) {
		next(err);
	}

});


async function hashPassword(plaintextPassword){
	const hash = await bcrypt.hash(plaintextPassword,10);
	return hash;
}

module.exports = router;