const mongoose = require('mongoose')

const TicketSchema = new mongoose.Schema({
  ticket: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  urgency: {
    type: String,
    required: true
  }
})

<<<<<<< HEAD
module.exports = mongoose.model('Ticket', TicketSchema)
=======
module.exports = mongoose.model('Todo', TodoSchema)
>>>>>>> b6c6fae4dba1637fac5e056c5bdd66bd3d72a88c
