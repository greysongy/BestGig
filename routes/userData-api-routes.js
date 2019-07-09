var db = require("../models");

module.exports = function(app) {
    app.get("/api/userData", function(req,res) {
        db.userData.findAll({}).then(function(dbuserData) {
            res.json(dbuserData)
        })
    })
}