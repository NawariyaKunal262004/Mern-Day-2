const jwt = require("jsonwebtoken");

/**
 * JWT Authentication Middleware
 * -----------------------------
 * Verifies JWT token from Authorization header
 */
const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;

  // Header missing
  if (!authHeader) {
    return res.status(401).json({
      success: false,
      data: null,
      message: "Authorization header missing"
    });
  }

  // Format: Bearer token
  const token = authHeader.split(" ")[1];

  // Token missing
  if (!token) {
    return res.status(401).json({
      success: false,
      data: null,
      message: "Token missing"
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Attach user info to request
    req.user = decoded;

    // Continue request
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      data: null,
      message: "Invalid or expired token"
    });
  }
};

module.exports = authMiddleware;
