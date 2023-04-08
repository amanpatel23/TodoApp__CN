
// require the todo item model
const TodoItem = require('../models/todoItem');

// Export an asynchronous function that toggles the isTaskChecked property of a TodoItem
module.exports.update_todo = async function(request, response) {
    // Get the ID of the TodoItem from the query parameter
    const id = request.query.id;

    let isMarked;
    try {
        // Find the TodoItem in the database and get its current isTaskChecked value
        const item = await TodoItem.findById(id);
        isMarked = item.isTaskChecked;
    }
    catch (error) {
        // Log an error message if there is a problem finding the TodoItem
        console.log('Error while searching for item: ', error);
    }

    try {
        // Toggle the isTaskChecked property of the TodoItem in the database
        await TodoItem.findByIdAndUpdate(id, {$set: {isTaskChecked: !isMarked}});
        return response.redirect('back');
    }
    catch(error) {
        // Log an error message if there is a problem updating the TodoItem in the database
        console.log('Error while updating the database: ', error);
    }
}