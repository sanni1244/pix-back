const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const qRoutes = require("./routes/questionRoutes");
const gRoutes = require("./routes/gameRoutes");
const dRoutes = require("./routes/dashboard");
const pRoutes = require("./routes/profileRoutes");
const app = express();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", qRoutes);
app.use("/api/games", gRoutes);
app.use("/api/games", dRoutes);
app.use("/api/profile", pRoutes);
app.use('/uploads', express.static('uploads'));

// Fallback Route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Vercel!" });
});

module.exports = app;
