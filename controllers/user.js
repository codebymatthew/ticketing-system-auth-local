const User = require("../models/User");

// TODO:  Delete tickets from the deleted user
//        Change users to/from Admin status
//        Add new users

module.exports = {
  // This is not functional, just a stub from createTicket for now
  createUser: async (req, res) => {
    const validationErrors = [];
    if (req.body.ticketItem == "") validationErrors.push({ msg: "Please enter ticket information." });
    if (req.body.urgency == "") validationErrors.push({ msg: "Please enter urgency." });
    if (validationErrors.length) {
      req.flash("errors", validationErrors);
      return res.redirect("/tickets");
    }
    try {
      await Ticket.create({
        ticket: req.body.ticketItem,
        completed: false,
        // userId: req.user.id,
        userId: req.body.assignedUser,
        urgency: req.body.urgency,
        assignedBy: req.user.id,
      });
      console.log("Ticket has been added!");
      console.log("Assigned to user: ", req.body.assignedUser, "by", req.user.id);
      res.redirect("/tickets");
    } catch (err) {
      console.log(err);
    }
  },

  deleteUser: async (req, res) => {
    // console.log(req.body.userIdFromJSFile);
    try {
      await User.findOneAndDelete({ _id: req.body.userIdFromJSFile });
      console.log("Deleted User");
      res.json("Deleted It");
    } catch (err) {
      console.log(err);
    }
  },
};
