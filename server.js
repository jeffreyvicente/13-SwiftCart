// Imports Express framework
const express = require('express');
// Imports routes module
const routes = require('./routes');

// Imports sequelize connection
const sequelize = require('./config/connection');

//Creating an instance of the Express
const app = express();
// Setting the port number for the server.
const PORT = process.env.PORT || 3001;

// Configures the Express application to handle requests with JSON 
app.use(express.json());
// Configuring the Express application to parse incoming requests with URL-encoded payloads
app.use(express.urlencoded({ extended: true }));

// Mounting the routes module on the application.
app.use(routes);

/*
// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
*/

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

