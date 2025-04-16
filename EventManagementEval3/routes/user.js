const express = require('express');
const router = express.Router();
const User = require('../models/user');

// CREATE - Add a new event
router.post('/', async (req, res) => {
  let { name, date, time, location, description } = req.body;
  let newUser = new User({ name, date, time, location, description });
  await newUser.save();
  res.redirect('/users');
});

// READ - Show all events
router.get("/", async (req, res) => {
    try {
      const events = await User.find(); // Fetch all events stored in the "User" model
      console.log(events);  // Log the fetched events to the console
      res.render("eventList", { events });  // Pass the events array to the "eventList" view
    } catch (error) {
      console.log(error);  // Log any errors encountered
      res.status(500).send("Error retrieving events.");  // Send error response if there's an issue
    }
  });
  
  

// UPDATE - Render edit form
router.get('/edit/:id', async (req, res) => {
  let user = await User.findById(req.params.id);
  res.render('editForm', { user });
});

// UPDATE - Submit changes
router.post('/update/:id', async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.redirect('/users');
});

// DELETE - Remove event
router.post('/delete/:id', async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.redirect('/users');
});

module.exports = router;
