const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const { isEmail, isMobilePhone } = require('validator');
const userController = require('./../controllers/userController');
const userSchema = new mongoose.Schema({
	_id: Schema.Types.ObjectId,
	email: {
		type: String,
		required: [true, "Email is required"]
	},
	password: {
		type: String,
		required: [true, "Password is required"],
		minLength: [8, "minimum password length is 8 characters"]
	},
	isAdmin: {
		type: Boolean,
		default: false
	},
	isActive: {
        type: Boolean,
        default: true
    },
    userAvatar: {
    	type: String,
	    default: 'public/user/default.png'
    }
});

//password hash
userSchema.pre('save', function(next){
	if(!this.isModified('password'))
		return next();
	bcrypt.hash(this.password, 10, (err, passwordHash) => {
		if(err){
			return next(err);
		}else{
			this.password = passwordHash;
			next();
		}
	});
});

module.exports= mongoose.model("User", userSchema);