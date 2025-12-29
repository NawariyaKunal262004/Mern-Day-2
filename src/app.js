// Import core framework
const express = require("express");

// Import middleware
const cors = require("cors");


// Register global error handler middleware
const errorHandler = require("./middlewares/error.middleware");


// Import routes
const healthRoutes = require("./routes/health.routes");
const profileRoutes = require("./routes/profile.routes");
const authRoutes = require("./routes/auth.routes");



// Create Express application instance
// This represents the backend application itself
const app = express();

/**
 * -------------------------
 * Global Middleware Section
 * -------------------------
 */

// Enables Cross-Origin Resource Sharing
// Allows frontend apps (React, Vue, etc.) to talk to this backend
// In production, this can be restricted to specific domains
app.use(cors());

// Parses incoming JSON request bodies
// Required for POST/PUT requests later (auth, forms, payments)
app.use(express.json());
app.use("/api", authRoutes);

/**
 * -------------------------
 * Routes Registration
 * -------------------------
 */

// All health-related routes will be prefixed with /api
// Final endpoint becomes: /api/health
app.use("/api", healthRoutes);
app.use("/api", profileRoutes);


/**
 * -------------------------
 * Root Route (Sanity Check)
 * -------------------------
 */

// Simple route to confirm app is wired correctly
// This is NOT an API endpoint, just a basic check
app.get("/", (req, res) => {
  res.send("App is running");
});

/**
 * Global Error Handler
 * Must be the LAST middleware
 */
app.use(errorHandler);

// Export app so it can be used by server.js
module.exports = app;
