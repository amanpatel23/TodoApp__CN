// require the todo item model
const TodoItem = require('../models/todoItem');

// Export an asynchronous function that adds a new todo item to the database
module.exports.add_todo = async function(request, response) {
    try {
        // Create a new TodoItem using the data from the request body
        await TodoItem.create({
            todoDesc: request.body.todoDesc,
            todoCategory: request.body.todoCategory,
            todoDueDate: request.body.todoDueDate,
            isTaskChecked: false
        })

        // redirect the user back
        return response.redirect('back');
    }
    catch (error) {
        // Log an error message to the console if there is a problem adding the TodoItem
        console.log('Error while adding TodoItem to the database ', error);
    }
}