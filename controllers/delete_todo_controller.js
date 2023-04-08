
const TodoItem = require('../models/todoItem');

module.exports.delete_todo = async function(request, response) {

    let result;
    try {
        result = await TodoItem.find({isTaskChecked: true});
    }
    catch (error) {
        console.log('Error occured while searching in database: ', error);
        return;
    }

    const deletePromises = result.map(item => TodoItem.findByIdAndDelete(item._id));
    try {
        await Promise.all(deletePromises);
        console.log('Items deleted successfully');
    }
    catch (error) {
        console.log('Error occurred while deleting the items from database: ', error);
        return;
    }

    return response.redirect('back');
}