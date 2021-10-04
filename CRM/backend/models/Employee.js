const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const employeeSchema = new mongoose.Schema({
	firstname: {
		type: String,
		required: [true, "First name is required"]
	},
	lastname: {
		type: String,
		required: [true, "Last name is required"]
	},
    isActive: {
        type: Boolean,
        default: true
    },
    company: {
    	  type: Schema.Types.ObjectId, ref: 'Company'
    },
    dateCreated: {
    	type: Date,
    	default: new Date().toISOString()
    }
});

module.exports= mongoose.model("Employee", employeeSchema);