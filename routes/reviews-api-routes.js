var db = require("../models");

module.exports = function (app) {

    // This will get all the reviews for the company Uber in Oakland
    app.get("/api/reviews/oakland", function (req, res) {
        db.reviews.findAll({
            where: {
                location: "Oakland",
                company_name: "Uber"
            }
        }).then(function (dbReviews) {
            res.json(dbReviews);
        });
    });

    // This will get all the reviews for the company Uber in San Francisco
    app.get("/api/reviews/sf", function (req, res) {
        db.reviews.findAll({
            where: {
                location: "San Francisco",
                company_name: "Uber"

            }
        }).then(function (dbReviews) {
            res.json(dbReviews);
        });
    });

    // User can add a new review to the database through here
    app.post("/api/reviews", function (req, res) {
        db.reviews.create(req.body).then(function (dbReviews) {
            res.json(dbReviews);
        });
    });

}

