// Controller handles business logic, NOT routing
// This keeps the code scalable and clean

const { successResponse } = require("../utils/api.response");

// GET /api/profile
const getProfile = (req, res) => {
  return res.status(200).json({
    success: true,
    data: {
      id: req.user.id,
      email: req.user.email,
      role: req.user.role
    },
    message: "Profile fetched successfully"
  });
};


// POST /api/profile
// This simulates saving profile data
// Later this will go into database

const createProfile = (req, res) => {
  const { name, role } = req.body;

  // Basic validation (very important)
  if (!name || !role) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "Name and role are required"
    });
  }

  // Simulated saved profile
  const savedProfile = {
    name,
    role,
    createdAt: new Date().toISOString()
  };

  return successResponse(
    res,
    savedProfile,
    "Profile created successfully"
  );
};

module.exports = {
  getProfile,
  createProfile
};

