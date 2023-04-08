
// Import the Mongoose module and connect to a MongoDB database
const mongoose = require('mongoose');

// Connect to a MongoDB database at the given URL using the Mongoose connect method
mongoose.connect('mongodb://127.0.0.1/todoapp_db').then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(`Error connecting to MongoDB: ${error}`);
})