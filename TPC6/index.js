const express = require('express') // Making servers easy.
const path = require('path') 
const bodyParser = require('body-parser') // Parsing the request body.

const routes = require('./routes') // Separating the routes in a different folder for organisation.

const app = express()

const PORT = process.env.PORT || 3001 // Choosing the port from a env variable or if it does not exist choose port 3000.

app.use(express.static(path.join(__dirname, 'public'))) // Static files folder.

app.set('view engine', 'pug') // Setting the default template engine.

// Middleware for body parsing.
app.use(bodyParser.json()) // JSON body parser

app.use('/', routes) // Using external module routes.

app.listen(PORT) // Starting the server.
console.log(`Server listening on port ${PORT}...\n`)