const mongoose = require('mongoose');

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

const TodoItem = mongoose.model('TodoItem', todoItemSchema);
module.exports = TodoItem;