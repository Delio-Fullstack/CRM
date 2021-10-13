// init express
const express = require('express');
const router = express.Router();
const auth = require('./../auth');
const userController = require('./../controllers/userController');

//adduser
router.post('/create',  (req, res) => {
	console.log(req)
	userController.createUser(req.body).then((result) => {
		res.send(result);
	}, err => {
		res.send(err);
	});
});


//userProfile 
router.get('/profile', auth.verify, (req, res) => {
	
	const user = auth.decode(req.headers.authorization);
	console.log(user)
	userController.userProfile(user.id).then(user => {
		res.send(user);
	})
});

//login user 
router.post('/login', (req, res) => {
	let valid = {}
	userController.loginUser(req.body).then((result) => {
		res.send( result )
	},err => {
		res.send(err)
	});
});


module.exports = router