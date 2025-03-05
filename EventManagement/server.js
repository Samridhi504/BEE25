const express = require("express");
const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// In-memory event storage (Instead of MongoDB)
let events = [
  { id: 1, title: "Tech Meetup", location: "Delhi", date: "2025-06-10" },
  { id: 2, title: "AI Conference", location: "Mumbai", date: "2025-07-20" },
];

// Create (POST) - Add an Event
app.post("/events", (req, res) => {
  const newEvent = { id: events.length + 1, ...req.body };
  events.push(newEvent);
  res.status(201).json(newEvent);
});

// Read (GET) - Get All Events
app.get("/events", (req, res) => {
  res.json(events);
});

// Read (GET) - Get Event by ID
app.get("/events/:id", (req, res) => {
  const event = events.find((e) => e.id === parseInt(req.params.id));
  event
    ? res.json(event)
    : res.status(404).json({ message: "Event not found" });
});

// Update (PUT) - Update an Event
app.put("/events/:id", (req, res) => {
  const event = events.find((e) => e.id === parseInt(req.params.id));
  if (event) {
    Object.assign(event, req.body);
    res.json(event);
  } else {
    res.status(404).json({ message: "Event not found" });
  }
});

// Delete (DELETE) - Remove an Event
app.delete("/events/:id", (req, res) => {
  events = events.filter((e) => e.id !== parseInt(req.params.id));
  res.json({ message: "Event deleted" });
});

app.get("/", (req, res) => {
    res.send("Welcome to the Event Management API!");
  });
// Start Server
app.listen(PORT, () =>
  console.log(` Server running on http://localhost:${PORT}`)
);
