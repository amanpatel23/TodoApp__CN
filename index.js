// require the express framework
const express = require('express');
// port at which my express server runs
const port = 8000;

// getting the database connection
const db = require('./config/mongoose');

// create an instance of express framework
const app = express();

// middleware for decrypt the url
app.use(express.urlencoded());

// setup the view engine
app.set('view engine', 'ejs');
app.set('views', './views'); 

// server static files from assets directory
app.use(express.static('assets'));

// use express router
app.use('/', require('./routes'));

// running the server
app.listen(port, function(error) {
    if (error) {
        console.log(`Error in running the server: ${error}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
})