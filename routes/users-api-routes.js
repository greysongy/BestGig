var db = require("../models");

module.exports = function(app) {
    app.get("/api/users", function(req,res) {
        db.Users.findAll({}).then(function(dbUsers) {
            res.json(dbUsers)
        })
    })
    app.post("/api/users", function(req, res) {
        db.Users.create(req.body).then(function(dbUsers) {
            res.json(dbUsers)
        })
    })
}