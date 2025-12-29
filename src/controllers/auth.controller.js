const jwt = require("jsonwebtoken");

/**
 * Login Controller
 * ----------------
 * Simulates user login
 * Generates JWT token
 */
const login = (req, res) => {
  const { email, password } = req.body;

  // Dummy validation (real apps use DB)
  if (!email || !password) {
    return res.status(400).json({
      success: false,
      data: null,
      message: "Email and password are required"
    });
  }

  // Payload stored inside token
  const payload = {
    id: 1,
    email,
    role: "user"
  };

  // Generate token
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h"
  });

  return res.status(200).json({
    success: true,
    data: {
      token
    },
    message: "Login successful"
  });
};

module.exports = {
  login
};
