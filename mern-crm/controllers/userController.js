const mongoose = require("mongoose");
const User = require('./../models/User');
//auth js
const auth = require('./../auth');
const bcrypt = require('bcrypt');

//ADD USER 
module.exports.createUser = (reqBody) => {
	console.log(reqBody)
	let newUser = new User({
		email: reqBody.email,
		password: reqBody.password
	});
	return newUser.save().then((user, err) => {
		if(err)return err
		return {
			message: 'successfully register',
			user: {
				email: user.email,
				password: reqBody.password
			}
		}	
	});
}

//GET USE PROFILE 
module.exports.userProfile = ( userID ) => {
	return User.findById(userID)
	.select({password: 0, isActive: 0, __v: 0, userAvatar: 0 })
	.then(user => {
		return {user}
	});
}

//LOGIN FUNCTION
module.exports.loginUser = async (reqBody) => {
	return await User.findOne({email: reqBody.email}).then((result) => {
			if(result == null){
				return { error: "Authentication Failed"}// Email doesn exists
			}else{
				const isPasswordCorrect = bcrypt.compareSync(reqBody.password, result.password); //return boolean
				if(isPasswordCorrect){
					return {access: auth.createAccessToken(result.toObject())}

				}else{
					return { error: "Authentication Failed"}// password didnt match
				}
			}
		});	
}
