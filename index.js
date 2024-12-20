const express = require("express");

const app = express();

// Simple route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Vercel!" });
});

// Export the app for Vercel
module.exports = app;
