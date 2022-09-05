<<<<<<< HEAD
const express = require('express')
const router = express.Router()
const ticketsController = require('../controllers/tickets') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, ticketsController.getTickets)

router.post('/createTicket', ensureAuth, ticketsController.createTicket)

router.put('/markComplete', ensureAuth, ticketsController.markComplete)

router.put('/markIncomplete', ensureAuth, ticketsController.markIncomplete)

router.delete('/deleteTicket', ensureAuth, ticketsController.deleteTicket)
=======
const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

router.get("/", ensureAuth, todosController.getTodos);

router.post("/createTodo", ensureAuth, todosController.createTodo);

router.put("/markComplete", ensureAuth, todosController.markComplete);

router.put("/markIncomplete", ensureAuth, todosController.markIncomplete);

router.delete("/deleteTodo", ensureAuth, todosController.deleteTodo);
>>>>>>> b6c6fae4dba1637fac5e056c5bdd66bd3d72a88c

module.exports = router;
