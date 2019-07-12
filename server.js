// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Routes



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
require("./routes/reviews-api-routes.js")(app);
require("./routes/companies-api-routes.js")(app);
require("./routes/users-api-routes.js")(app);



// Syncing our sequelize models and then starting our Express app
// =============================================================

// For sync({}) put force: true to erase data from database everytime we reload the server
db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("App listening on PORT http://localhost:" + PORT);
  });
});