const jwt = require('jsonwebtoken');
const secret = "BEsecret";
//CREATE TOKENs
module.exports.createAccessToken = (user) => {
    const data = {
    	id: user._id,
    	email: user.email,
    	isAdmin: user.isAdmin,
    }
    return jwt.sign(data, secret, {});
};
//admin role
module.exports.adminRole = (req, res, next) => {
	const isAdmin = this.decode(req.headers.authorization).isAdmin;

	if(isAdmin){
		next()
	}else{
		res.status(403).send({error: "you dont have permission"})
	}
}
//user role
module.exports.userRole = (req, res,  next) => {
	const isAdmin = this.decode(req.headers.authorization).isAdmin;
	if(!isAdmin){
		next()
	}else{
		res.status(403).send({error: "you dont have permission"})
	}
}

// VERIFY TOKEN
module.exports.verify = (req, res, next) => {
	let token = req.headers.authorization;
	//CHECKING THE TOKEN
	if(typeof token !== 'undefined'){
		token = token.slice(7, token.length);
		return jwt.verify(token, secret, (err, data) => {
			if(err) return err;
			next();
		});
	}else{	
		return res.send({auth: "please login"});
	}
}
//DECODE TOKEN
module.exports.decode = (token) => {
	if(typeof token !== 'undefined'){
		token = token.slice(7, token.length);
		return jwt.verify(token, secret, (err, data) => {
			if(err) return err 
			return jwt.decode(token, {complete: true}).payload
			//decode() decodes the token and get the payload - data from the token we initialy created when we login 
		});
	}else{
		return null
	}
}