/**
 * Global error handler
 * This catches errors thrown anywhere in the app
 */
const errorHandler = (err, req, res, next) => {
  console.error("Error:", err.message);

  res.status(500).json({
    success: false,
    data: null,
    message: err.message || "Internal Server Error"
  });
};

module.exports = errorHandler;
