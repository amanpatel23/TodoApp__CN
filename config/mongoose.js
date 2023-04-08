
require('dotenv').config();

// Import the Mongoose module and connect to a MongoDB database
const mongoose = require('mongoose');

const username = process.env.DB_USER;
const password = process.env.DB_PASSWORD;

// Connect to a MongoDB database at the given URL using the Mongoose connect method
const address = `mongodb+srv://${username}:${password}@cluster0.wthkym3.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(address, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log(`Error connecting to MongoDB: ${error}`);
})