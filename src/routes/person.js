/*
first reference express
 */
let express = require('express')
let router = express.Router()

router.get('/person', (request, response) => {
    if (request.query.name){
        /*
        this will allow us to call localhost:3000/person?name=max
         */
        response.send(`You have request a person name ${request.query.name}`)
    } else {
        response.send("You have request a person name Carson Wentz")
    }
})

router.get('/person/:name', (request, response) => {
    response.send(`You have request a person name ${request.params.name}`)
})
// export router file to index.js file
module.exports = router
