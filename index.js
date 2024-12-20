const express = require("express");
const cors = require("cors");

const app = express();

// Enable CORS
app.use(cors());

// Simple route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Vercel!" });
});

// Export the app for Vercel
module.exports = app;
