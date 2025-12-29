const express = require("express");

// Create a router instance
// Router is like a mini-app responsible for specific endpoints
const router = express.Router();

// Import controller
const healthController = require("../controllers/health.controller");

/**
 * Health check endpoint
 * GET /api/health
 */
router.get("/health", healthController);

// Export router so app.js can mount it
module.exports = router;
