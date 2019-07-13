var db = require("../models");

// The data here is specific to the users models in the bestGigs_db

module.exports = function(app) {

    // Returns all the data of the users
    app.get("/api/users", function(req,res) {
        db.users.findAll({}).then(function(dbUsers) {
            res.json(dbUsers)
        })
    })

    // Adds a new user to the model in mysql
    app.post("/api/users", function(req, res) {
        db.users.create(req.body).then(function(dbUsers) {
            res.json(dbUsers)
        })
    })
}