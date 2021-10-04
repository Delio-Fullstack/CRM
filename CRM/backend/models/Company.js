const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "name is required"]
	},
	email: {
		type: String,
		required: [true, "Email is required"]
	},
    phone: {
        type: Number,
        required: [ true, "phone number is required"]
    },
    logo: {
        type: String,
	    default: 'public/company/default.png'
    },
    website: {
        type: String,
        default: "http://"
    },
    isActive: {
        type: Boolean,
        default: true
    },
    employees: [
        { type: Schema.Types.ObjectId, ref: 'Employee' } 
    ], 
    dateCreated: {
        type: Date,
        default: new Date().toISOString()
    }
});


module.exports= mongoose.model("Company", companySchema);