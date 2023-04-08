const express = require('express');
const port = 8000;


const db = require('./config/mongoose');

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