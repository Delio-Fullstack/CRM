// init express
const express = require('express');
const router = express.Router();
const auth = require('./../auth');
const companyLogo = require('../helpers/companyLogoHelper');
const companyController = require('./../controllers/companyController');

//ADD COMPANY ENDPOINTS
router.post('/add-company', auth.verify, (req, res) => {
	companyController.addCompany(req.body).then((result) => {
		res.send(result);
	}, err => {
		res.send(err);
	});
}); 
//GET ALL COMPANY  ENDPOINTS
router.get('/get-all-company',  auth.verify,  (req, res) => {
    const paginateOptions = {
		page: parseInt(req.query.page || 1),
		limit: parseInt(req.query.limit || 10)
	}
    companyController.getCompany(paginateOptions).then(company => {
        res.send(company);
    })
});

//GET SINGLE Company Endpoints
router.get('/view-company/:id', auth.verify, (req, res) => {
    const companyID = req.params.id;

    companyController.getSingleCompany(companyID).then(company => {
        res.send(company);
    });
});
//update employee ENDPOINTS
router.put('/:id/update-company',   auth.verify, (req, res) => {
    const companyID = req.params.id;
    const reqBody = req.body;
    companyController.updateCompany(companyID, reqBody).then(result => {
        res.send(result)
    }).catch(err => res.send(err));

});
//hard delete employee  ENDPOINTS
router.delete('/:id/delete-company',   auth.verify, (req, res) => {
    const companyID = req.params.id;
    companyController.deleteCompany(companyID ).then(result => {
        res.send(result);
    }).catch(err => res.send(err));
});

//SOFT DELETE  ENDPOINTS
router.put('/:id/archive-company',  auth.verify,  (req, res) => {
    const companyID = req.params.id;
    companyController.archiveCompany(companyID).then(result => {
        res.send(result)
    }).catch(er => res.send(err))
});

module.exports = router