// init express
const express = require('express');
const router = express.Router();
const auth = require('./../auth');
const employeeController = require('./../controllers/employeeController');

//add employee ENDPOINTS
router.post('/add-employee',  auth.verify,  (req, res) => {
	employeeController.addEmployee(req.body).then((result) => {
		res.send(result);
	}, err => {
		res.send(err);
	});
});

//get all employee ENDPOINTS
router.get('/get-all-employee',  auth.verify,  (req, res) => {
    const paginateOptions = {
		page: parseInt(req.query.page || 0),
		limit: parseInt(req.query.limit || 10)
	}
    employeeController.getEmployee(paginateOptions).then(employees => {
        res.send(employees);
    })
});

//get single Employee ENDPOINTS

router.get('/view-employee/:id', auth.verify, (req, res) => {
    const employeeID = req.params.id;
    employeeController.getSingleEmployee(employeeID).then(employee => {
        res.send(employee)
    })
});

//update employee ENDPOINTS
router.put('/:id/update-employee', auth.verify, (req, res) => {
    const employeeID = req.params.id;
    const reqBody = req.body;
    employeeController.updateEmployee(employeeID, reqBody).then(result => {
        res.send(result)
    }).catch(err => res.send(err));

});


//hard delete employee  ENDPOINTS
router.delete('/:id/delete-employee', auth.verify, (req, res) => {
    const employeeID = req.params.id;
    employeeController.deleteEmployee(employeeID).then(result => {
        res.send(result);
    }).catch(err => res.send(err));
});


//SOFT DELETE  ENDPOINTS
router.put('/:id/archive-employee', auth.verify, (req, res) => {
    const employeeID = req.params.id;
    employeeController.archiveEmployee(employeeID).then(result => {
        res.send(result)
    });
});

module.exports = router