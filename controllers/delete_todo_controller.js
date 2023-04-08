
// require the todo item model
const TodoItem = require('../models/todoItem');

// Export an asynchronous function that deletes all completed TodoItems from the database
module.exports.delete_todo = async function(request, response) {

    let result;
    try {
        // Find all TodoItems where isTaskChecked is true
        result = await TodoItem.find({isTaskChecked: true});
    }
    catch (error) {
        // Log an error message if there is a problem finding the TodoItems
        console.log('Error occured while searching in database: ', error);
        return;
    }

    // Create an array of promises that delete each completed TodoItem
    const deletePromises = result.map(item => TodoItem.findByIdAndDelete(item._id));
    try {
        // Wait for all delete promises to resolve
        await Promise.all(deletePromises);
    }
    catch (error) {
        // Log an error message if there is a problem deleting the TodoItems
        console.log('Error occurred while deleting the items from database: ', error);
        return;
    }

    // Redirect the user back to the previous page
    return response.redirect('back');
}