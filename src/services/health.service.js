/**
 * Business logic for health status
 * This function can later:
 * - Check database connectivity
 * - Check external services
 * - Check system load
 */
const getHealthStatus = () => {
  return "ok";
};

// Export service functions
module.exports = {
  getHealthStatus
};
