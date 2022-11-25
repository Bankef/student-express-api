// This file describes our student model and the model defines the column in the table
module.exports = (sequelize, DataTypes) => {

    //This stores up our table properties and the types of data they are in a structure
    let Student = sequelize.define('Student', {
        name: {
            type: DataTypes.STRING,
            allowNull: false //this ensures the name value is not left void in the database
        },
        starID: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true // StarID data input will be unique for all students in the database
        },
        present: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        }
    })

    // force specifies whether to drop the table or not
    // true drops the table every time app restarts. We need this setting is our table schema changes
    // false keeps our table as is
    Student.sync( {force: true} ).then( () => {
        console.log('Synced student table ')
    })
    return Student
}