const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
// const qRoutes = require("./routes/questionRoutes");
// const gRoutes = require("./routes/gameRoutes");
// const dRoutes = require("./routes/dashboard");
// const pRoutes = require("./routes/profileRoutes");

dotenv.config();
connectDB();

const app = express();
 
app.use(cors());
app.get('/', (req, res) => {
  res.send('Backend is running!');
  res.status(200).json({ message: 'Login successful' });
});

app.use(express.json());

// API routes
app.use("/api/auth", authRoutes);
// app.use("/api/questions", qRoutes);
// app.use("/api/games", [gRoutes, dRoutes]); 
// app.use("/api/profile", pRoutes);

// Static file serving for uploads
// app.use('/uploads', express.static('uploads'));

module.exports = app;
