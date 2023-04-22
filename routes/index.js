const express = require("express");
const router = express.Router();


const { Employee } = require('../models/employee');


//get all employess
router.get('/api/employees', (req, res) => {
    Employee.find({})
        .exec()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

//add
router.post('/api/employee/add', (req, res) => {
    const emp = new Employee({
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    });

    emp.save(emp)
    .then(data=> {
        res.send(data);
        message:
        "employee added succesfullu"
    })
    .catch(err => {
        res.status(500).send({
            message:
            err.message || " some error occured"
        });
    });
});
    // emp.save((err, data) => {
    //     res.status(200).json({
    //         code: 200, message: 'Employee added successfully',
    //         addEmployee: data
    //     })
    

//get single employee by id
router.get('/api/employee/:id', (req, res) => {

    Employee.findById(req.params.id)
    .then(data => {
        if(!data)
        res.status(404).send({message : "not found employee with id " + d});
        else res.send(data);
    })
    .catch(err => {
        res
        .status(500)
        .send({message : "Error retrieving tutorial with id =" + id}); 
    });
});
//     Employee.findById(req.params.id, (err, data) => {
//         if (!err) {
//             res.send(data);
//         } else {
//             console.log(err);
//         }
//     });

// });

//update employee

router.put('/api/employee/edit/:id', (req, res) => {
    const emp = {
        name: req.body.name,
        email: req.body.email,
        salary: req.body.salary
    };

    Employee.findByIdAndUpdate(req.params.id,req.body, { useFindandModify: false})
    .then(data => {
        if(!data){
         res.status(404).send({
            message: "cannot update ttorial with id=${id}.may be it was not found"
         });
         } else res.send({message: "employee was updates successfully"});
        })
        .catch(err => {
            res.status(500).send({
                message: "error updating employee "
            });
        });
    });
    
    // Employee.findByIdAndUpdate(req.params.id, { $set: emp }, { new: true }, (err, data) => {
    //     if (!err) {
    //         res.status(200).json({
    //             code: 200, message: 'Employee updated successfulyy',
    //             updateEmployee: data
    //         })
    //     } else {
    //         console.log(err);
    //     }
    // });

//delete emp
router.delete('/api/employee/:id', (req,res) =>{
    Employee.findByIdAndRemove(req.params.id)
    .then(data => {
        if(!data) {
            res.status(404).send({
                message: "cannot delete emloyee with id=${id}."
            });
        } else{
        res.send({
            message: "tutorial was deleted successfully!"
        });
        }
    })
    .catch(err =>{
        res.status(500).send({
            message: "could not detelete employee"
        });
    });
});
//     {
//         if(!err){
//             res.status(200).json({code:200, message: 'Employee deleted successfully',
//         deleteEmployee: data});
//         }
//     });
// })   

module.exports = router; 