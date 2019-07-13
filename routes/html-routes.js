var path = require("path");
var db = require("../models")


// These routes will show a certain html page based on the route request

module.exports = function (app) {

    // The root route will render the index html page (handlebars)
    app.get("/", function (req, res) {
        db.companies.findAll({}).then(function (dbCompanies) {
            var companies = []
            for (var i = 0; i < dbCompanies.length; i++) {
                companies.push(dbCompanies[i].dataValues)
            }

            var hbsObject = {
                companies: companies
            }
            
            res.render("index", hbsObject)
        })


        // HERE, we do not want to load the companies in until the user has input a location that findAll({location}) can use.

        // OR: We CAN return back all the info, but then on the client side js we return (to the handlebars page) companies only specific to that location

    })

    // The test route will render the test html page
    app.get("/test", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/test.html"))
    })
}