// This is used for high level database configuration within our app
// Works together with the config.json file to read in the database stored there

    //Imports both sequelize library, and the data types module from the sequelize library
    let { Sequelize, DataTypes } = require('sequelize')

// Means read from an environment variables that are stored on a computer
// and if that's not set, use development as default, like we are doing here
    let env = process.env.NODE_ENV || 'development'
    console.log('using environment' + env)

//load the config file
    let configFile = require(__dirname + '/../config.json')
    let config = configFile[env]

// Store our password into the environment variable, Azure can store it and read it in as needed
    let password = process.env.DB_PASSWORD //It is undefined locally, not needed with sqlite
// We'll have to set the DB_PASSWORD environment variable at Azure
    config.password = password

    let db = {} //empty database object

    let sequelize = new Sequelize(config)

// Read in the student module, the student file and the data types
    let studentModelCreate = require('./student') // a function definition
    let studentModel = studentModelCreate(sequelize, DataTypes)

    db[studentModel.name] = studentModel

    db.sequelize = sequelize // sequelize configuration
    db.Sequelize = Sequelize //Sequelize library

    module.exports = db