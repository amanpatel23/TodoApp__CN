// require the express framework
const express = require('express');

// create a new router instance
const router = express.Router();

// require different controller modules
const home_controller = require('../controllers/home_controller');
const add_todo_controller = require('../controllers/add_todo_controller');
const update_todo_controller = require('../controllers/update_todo_controller');
const delete_todo_controller = require('../controllers/delete_todo_controller');

// route for the home page
router.get('/', home_controller.home);

// route for adding a new todo item to the database
router.post('/add-todo', add_todo_controller.add_todo);

// route for updating a todo item in the database
router.get('/update-todo', update_todo_controller.update_todo);

// route for deleting the todo items in the database
router.get('/delete-todo', delete_todo_controller.delete_todo);

// exporting the router object
module.exports = router;