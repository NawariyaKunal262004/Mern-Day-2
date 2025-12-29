// Load environment variables from .env file
require("dotenv").config();

// Import the Express app
const app = require("./app");

// Define port
// Uses environment variable if available, otherwise defaults to 5000
const PORT = process.env.PORT || 5000;

// Start the server
// This is the ONLY place where app.listen() should exist
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
