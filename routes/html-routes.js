var path = require("path");
var db = require("../models")


// These routes will show a certain html page based on the route request

module.exports = function(app) {
    
    // The root route will render the home html page (handlebars)
    app.get("/", function(req, res) {
        db.companies.findAll({}).then(function(dbCompanies) {
            var companies = []
            for (var i=0; i < dbCompanies.length; i++) {
                companies.push(dbCompanies[i].dataValues)
            }

            var hbsObject = {
                companies: companies
            }
            console.log(hbsObject)
            res.render("index", hbsObject)
        })
    })

    // The test route will render the test html page
    app.get("/test", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/test.html"))
    })
}