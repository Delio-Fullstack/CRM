const mongoose = require("mongoose");
const Employee = require("../models/Employee");
const Company = require("../models/Company");

//ADDING TO WAY RELATIONSHIP
//addemployee
module.exports.addEmployee = (reqBody) => {
	const companyID = reqBody.company;

	let newEmployee = new Employee({
		_id: new mongoose.Types.ObjectId(),
		firstname: reqBody.firstname,
		lastname: reqBody.lastname,
		company: companyID
	});
	const employeeSaveStatus =  newEmployee.save().then((err) => {
			if(err) return err;
			return true 
	});
	console.log(employeeSaveStatus);
	return Company.findById(companyID).then(company => {
		company.employees.push(newEmployee._id);
		return company.save({validateBeforeSave: false }).then(( reject, result ) => {
			if(reject) return reject
			return result
		});
	});

}

//GET ALL EMPLOYEE 
module.exports.getEmployee = async (paginateOptions) => {
    //GET THE TOTAL COUNT FOR PAGINATION PAGE
	const countEmployee = await Employee.estimatedDocumentCount({},(err, count) => {
		if(err) return err ;
		return count
	});
	return await Employee.find({isActive: true})
	.populate({
		path: 'company',
		model: 'Company',
		select: { employees: 0 }
	})
	.skip(paginateOptions.page * paginateOptions.limit)
	.limit(paginateOptions.limit)
	.sort({createdOn: -1})
	.then((result) => {	
		return {
			currentPage: paginateOptions.page,
			limit: paginateOptions.limit,
			totalPage: paginateOptions.page + " / " +  Math.ceil(countEmployee /  paginateOptions.limit - 1),
			employee: result
		}
	});
 }


//get single Employee 
module.exports.getSingleEmployee = (employeeID) => {
	const employee =  Employee.findOne({_id: employeeID, isActive: true }).then(employee => {
		return employee
	});

	return employee;
}
//UPDATE EMPLOYEE
module.exports.updateEmployee = (employeeID, reqBody) => {
    return Employee.findByIdAndUpdate(employeeID, reqBody, { new: true, useFindAndModify: false, runValidators: true})
	.then(result =>{
        return result;
	});
}

//SOFT DELETE Archive - EMPLOYEE
module.exports.archiveEmployee = (employeeID) => {
    return Employee.findByIdAndUpdate(employeeID, {isActive: false}, { new: true, useFindAndModify: false, runValidators: true})
	.then(result =>{
        return true;
	});
}

//HARD DELETE EMPLOYEE
module.exports.deleteEmployee = (employeeID) => {
	return Employee.findByIdAndDelete(employeeID).then((result) => {
		return true
	});
}




