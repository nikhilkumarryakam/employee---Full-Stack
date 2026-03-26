require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/employees";

mongoose.connect(MONGO_URI, { serverSelectionTimeoutMS: 5000 })
.then(() => console.log("✅ MongoDB Connected Successfully"))
.catch(err => {
  console.log("❌ MongoDB Connection Error:", err.message);
  console.log("\n📋 Setup Instructions:");
  console.log("1. MongoDB Atlas (Recommended): https://mongodb.com/cloud/atlas");
  console.log("2. Local MongoDB: https://www.mongodb.com/try/download/community");
  console.log("3. Update .env file with your MONGO_URI");
  console.log("\nSee MONGODB_SETUP.md for detailed instructions");
});

// Routes
const employeeRoutes = require("../Routes/employeeroutes");
app.use("/api/employees", employeeRoutes);

// Health Check
app.get("/api/health", (req, res) => {
  res.json({ status: "Server is running", dbStatus: mongoose.connection.readyState === 1 ? "Connected" : "Disconnected" });
});

// Serve static files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../../Employee - Frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../../Employee - Frontend/dist/index.html"));
  });
}

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
});