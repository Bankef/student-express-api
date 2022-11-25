// Makes the route for getting all the students and for adding a new student
    let express = require('express')
    let db = require('../model') //will fetch whatever index.js exports; which is our sequelize db to make it available to our api route
    let Student = db.Student // grabs the student model

    let router = express.Router()

// a request to student will cause this function to run
// findAll() returns a promise that contain the array of our students which is then converted into json and return it back to our vue client
    router.get('/students', function(req, res, next){
        Student.findAll().then( students => {
            return res.json(students)
        })
    })

// post used to create a request to our record on a server to create a new student object and then return a status code
    router.post('/students', function (req, res, next){
        Student.create( req.body ).then( data => {
            return res.status(201).send('ok')
        })
    })
// Make our router available to the rest of our project
    module.exports = router