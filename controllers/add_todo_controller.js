
const TodoItem = require('../models/todoItem');

module.exports.add_todo = async function(request, response) {
    try {
        await TodoItem.create({
            todoDesc: request.body.todoDesc,
            todoCategory: request.body.todoCategory,
            todoDueDate: request.body.todoDueDate,
            isTaskChecked: false
        })
        console.log('TodoItem added successfully ', request.body);
        return response.redirect('back');
    }
    catch (error) {
        console.log('Error while adding TodoItem to the database ', error);
    }
}