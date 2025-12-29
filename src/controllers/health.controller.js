// Import service layer
const healthService = require("../services/health.service");
const { successResponse } = require("../utils/api.response");

/**
 * Controller function for health check
 * Handles request and sends response
 */
const healthController = (req, res) => {
  // Get business logic result from service
  const status = healthService.getHealthStatus();

  // Send structured JSON response
  return successResponse(
    res, 
    {
    status: status,
    timestamp: new Date().toISOString()
  },
    "Health check successful");
};

// Export controller function
module.exports = healthController;
