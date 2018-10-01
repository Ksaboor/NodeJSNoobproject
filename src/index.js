let express = require('express')

let app = express()

// now we our going to reference the person route in our index.js file
let personRoute = require('./routes/person')

//below we are logging the routes
app.use((request, response, next) =>{
    console.log(`${new Date().toString()} => ${request.originalUrl}`)
    next()
})
//here we tell express to register this route
app.use(personRoute)
app.use(express.static('public'))

// now we are going to point this to our local port
// create const var to
const PORT = process.env.PORT || 3000;
// used back ticks so we can introduce our PORT variable
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
