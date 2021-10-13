const mongoose = require("mongoose");
const Company = require("../models/Company");

//ADD COMPANY
module.exports.addCompany = (reqBody) => {
	console.log(reqBody)
	let newCompany = new Company({
		name:reqBody.name,
        email:reqBody.email,
        website:reqBody.website,
        phone: phone
	});
	return newCompany.save().then(success => {
		return success
	});

}

//GET ALL COMPANY
module.exports.getCompany = async (paginateOptions) => {
    //GET THE TOTAL COUNT FOR PAGINATION PAGE
	const countCompany = await Company.estimatedDocumentCount({},(err, count) => {
		return count
	});	
	return await Company.find({isActive: true})
	.populate({
		path: 'employees', 
		model: 'Employee',
		select: {company: 0}
	}) 
	.skip(paginateOptions.page * paginateOptions.limit)
	.limit(paginateOptions.limit)
	.sort({createdOn: -1})
	.then((result) => {	
		return {
			currentPage: paginateOptions.page,
			limit: paginateOptions.limit,
			totalPage: paginateOptions.page + " / " +  Math.ceil(countCompany /  paginateOptions.limit - 1),
			company: result,
		}
	});

 }

//GET SINGE COMPANY 

module.exports.getSingleCompany = (companyID)  => {
	return Company.findOne({ _id: companyID, isActive: true }).then(company => {
		return company;
	});
}
//UPDATE COMPANY
module.exports.updateCompany = (companyID, reqBody) => {
    return Company.findByIdAndUpdate(companyID, reqBody, { new: true, useFindAndModify: false, runValidators: true})
	.then(result =>{
        return result;
	});
}

//SOFT DELETE Archive - COMPANY 
module.exports.archiveCompany = (companyID) => {
    return Company.findByIdAndUpdate(companyID, {isActive: false}, { new: true, useFindAndModify: false, runValidators: true})
	.then(result =>{
        return true;
	});
}

//HARD DELETE COMPANY 
module.exports.deleteCompany = (companyID) => {
	return Company.findByIdAndDelete(companyID).then((result) => {
		return true
	});
}

