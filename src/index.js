let express = require('express')

let app = express()

app.use(express.static('public'))

// now we are going to point this to our local port
// create const var to
const PORT = process.env.PORT || 3000;
// used back ticks so we can introduce our PORT variable
app.listen(PORT, () => console.info(`Server has started on ${PORT}`))
