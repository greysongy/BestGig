var path = require("path");
var db = require("../models")


// These routes will show a certain html page based on the route request

module.exports = function (app) {

    // The root route will render the index html page (handlebars)
    // Changed from res.render("home") to res.render("index")
    app.get("/", function (req, res) {
        res.render("home")
    })

    // The test route will render the test html page
    app.get("/test", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/test.html"))
    })
}