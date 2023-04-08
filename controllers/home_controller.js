
// require the todo item model
const TodoItem = require('../models/todoItem');

// Export an asynchronous function that retrieves all TodoItems from the database and renders the home view with the data
module.exports.home = async function(request, response) {

    try {
        // Find all TodoItems in the database
        const todoItem = await TodoItem.find({});

        // Render the home view and pass the TodoItem data as a parameter
        return response.render('home', {
            todoData: todoItem
        })
    }
    catch (error) {
        // Log an error message if there is a problem displaying the data
        console.log('Error occured while displaying the data: ', error);
    }
}