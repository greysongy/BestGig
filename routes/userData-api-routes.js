var db = require("../models");

module.exports = function(app) {
    app.get("/api/userData", function(req,res) {
        db.UserData.findAll({}).then(function(dbUserData) {
            res.json(dbUserData)
        })
    })
    app.post("/api/userData", function(req, res) {
        db.userData.create(req.body).then(function(dbuserData) {
            res.json(dbuserData)
        })
    })
}