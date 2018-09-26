# This is an example Node.JS Application

## Project Setup
1. npm init -y
    * created package.json file
2. git init
    * turn project into git repo
    * use `git cz` instead of `git commit` 
    for meaningful commit message. 
    * add to GitHub

# Running Node

1. Create src folder under root dir
2. Then create index.js file inside of src folder
3. open Terminal and run `node src/index.js` to print
`console.log("Hello World");`

## Json config

1. Added `"start": "node src/index.js",`
    * added script to run "start" instead of `node src/...`

# Express Setup
    * A lightwight web sever used to commumicate 
    with RESTful end points.
 1. npm install express
    * this will add the express dependency to 
    our Json file
 2. Reference the Express library
    * `let express = require('express')`
    *   `let app = express()`
3. Create a public folder and add a index.html file with mock text.

4. ````  now we are going to point this to our local port
   create const var to point to port number
   `const PORT = process.env.PORT || 3000;`
   used back ticks so we can introduce our PORT variable
  `app.listen(PORT, () => console.info(`Server has started on ${PORT}`))` 

5. In sum
    1. Create a public folder under root
    2. Create an HTML file
    3. Configure express to serve static content
# Route Setup
1. Summary
    * GET Request
    *  Request Parameters
    *  Query Parameters
    
2. `npm i nodemon -D `
    * only run "nodemon" in development
3. add this script to package.json
    * `"start-watch": "nodemon src/index.js",`
    * we did this avoid having to keep stopping and restarting
    our server when we make changes.
 
