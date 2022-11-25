    let express = require ('express')

    // require the api route
    let api_routes = require('./routes/student-api.js')

    // Create web application
    let app = express()

    //enable our app to express and process JSON requests, and convert data to JavaScript
    app.use(express.json())

    app.use('/api', api_routes)

    // Start server running on port 3000
    let server = app.listen(process.env.PORT || 3000, function(){
        console.log('Express server running on port ', server.address().port )
    })

