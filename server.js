// Import the Express app from index.js
const app = require('./index');

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
}); 