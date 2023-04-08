
// Import the Mongoose module and create a schema for a TodoItem
const mongoose = require('mongoose');

// Define the TodoItem schema with required properties and data types
const todoItemSchema = new mongoose.Schema({
    todoDesc: {
        type: String,
        required: true
    },
    todoCategory: {
        type: String,
        required: true
    },
    todoDueDate: {
        type: Date,
        required: true
    },
    isTaskChecked: {
        type: Boolean
    }
})

// Create a Mongoose model for the TodoItem schema and export it for use in other modules
const TodoItem = mongoose.model('TodoItem', todoItemSchema);
module.exports = TodoItem;