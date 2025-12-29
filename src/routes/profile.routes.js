// Routes define API endpoints only
// No business logic should exist here

const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth.middleware");
// Import controller
const { getProfile, createProfile } = require("../controllers/profile.controller");

// GET /api/profile
router.get("/profile", authMiddleware, getProfile);

// POST /api/profile
router.post("/profile", createProfile);

module.exports = router;
