// Creates an instance of Express router
const router = require('express').Router();

// Importing the API routes module
const apiRoutes = require('./api');

// Mounting the API routes module under the '/api' path
router.use('/api', apiRoutes);

// Output when the route is not found. 
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

// Exports the router instance
module.exports = router;