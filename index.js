const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const qRoutes = require("./routes/questionRoutes");
const gRoutes = require("./routes/gameRoutes");
const dRoutes = require("./routes/dashboardRoutes"); // Renamed for clarity
const pRoutes = require("./routes/profileRoutes");

const app = express();

// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/questions", qRoutes);
app.use("/api/games", gRoutes);
app.use("/api/dashboard", dRoutes); // Changed route to prevent conflicts
app.use("/api/profile", pRoutes);

// Root route
app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello from Vercel!" });
});

// Global error handling middleware (optional)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An internal server error occurred." });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
