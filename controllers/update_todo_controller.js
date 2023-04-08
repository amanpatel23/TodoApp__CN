
const TodoItem = require('../models/todoItem');

module.exports.update_todo = async function(request, response) {
    const id = request.query.id;

    let isMarked;
    try {
        const item = await TodoItem.findById(id);
        isMarked = item.isTaskChecked;
    }
    catch (error) {
        console.log('Error while searching for item: ', error);
    }

    try {
        await TodoItem.findByIdAndUpdate(id, {$set: {isTaskChecked: !isMarked}});
        console.log('desc updated');
        return response.redirect('back');
    }
    catch(error) {
        console.log('Error while updating the database: ', error);
    }
}