/**
 * Standard success response
 * Used by all controllers to keep API responses consistent
 */
const successResponse = (res, data = {}, message = "Success", statusCode = 200) => {
  return res.status(statusCode).json({
    success: true,
    data,
    message
  });
};

/**
 * Standard error response
 * Used when something goes wrong
 */
const errorResponse = (res, message = "Something went wrong", statusCode = 500) => {
  return res.status(statusCode).json({
    success: false,
    data: null,
    message
  });
};

module.exports = {
  successResponse,
  errorResponse
};
