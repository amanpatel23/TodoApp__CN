
const TodoItem = require('../models/todoItem');

module.exports.home = async function(request, response) {

    try {
        const todoItem = await TodoItem.find({});
        return response.render('home', {
            todoData: todoItem
        })
    }
    catch (error) {
        console.log('Error occured while displaying the data: ', error);
    }
}