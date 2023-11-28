const Router = require('express');
const router = new Router();
const todoController = require('../controllers/todo.controller');

router.post('/todo', todoController.createTodo )
router.get('/todo', todoController.getAllTodo)
router.get('/todo/:id', todoController.getOneTodo)
router.put('/todo/:id', todoController.updateTodo)
router.delete('/todo/:id', todoController.deleteTodo)



module.exports = router;
