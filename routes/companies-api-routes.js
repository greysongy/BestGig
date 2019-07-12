var db = require("../models")

module.exports = function(app) {
    // Here we can find all the info from the model companies
    app.get("/api/companies", function(req,res) {
        db.companies.findAll({}).then(function(dbCompanies) {
            res.json(dbCompanies)
        })
    });

    app.post("/api/companies", function(req, res) {
        db.companies.create(req.body).then(function(dbCompanies) {
            res.json(dbCompanies)
        })
    })
}