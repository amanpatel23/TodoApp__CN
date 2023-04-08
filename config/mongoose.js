
// Import the Mongoose module and connect to a MongoDB database
const mongoose = require('mongoose');

// Connect to a MongoDB database at the given URL using the Mongoose connect method
const address = 'mongodb+srv://amanpatel23:amanpatel@cluster0.wthkym3.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(address).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(`Error connecting to MongoDB: ${error}`);
})