const express = require('express');

const router = express.Router();

const home_controller = require('../controllers/home_controller');
const add_todo_controller = require('../controllers/add_todo_controller');
const update_todo_controller = require('../controllers/update_todo_controller');
const delete_todo_controller = require('../controllers/delete_todo_controller');

router.get('/', home_controller.home);
router.post('/add-todo', add_todo_controller.add_todo);
router.get('/update-todo', update_todo_controller.update_todo);
router.get('/delete-todo', delete_todo_controller.delete_todo);


module.exports = router;