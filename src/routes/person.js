/*
first reference express
 */
let express = require('express')
let router = express.Router()

router.get('/person', (request, response) => {
    response.send("You have request a person name Carson Wentz")
})
// export router file to index.js file
module.exports = router
