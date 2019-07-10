var db = require("../models");

module.exports = function(app) {

    app.get("/api/reviews", function(req, res) {
        // var query = {};
        // if (req.query.user_id){
        //     query.UserId = req.query.user_id;
        // }
        db.reviews.findAll({
            // where: query
        }).then(function(dbReviews) {
            res.json(dbReviews);
        });
        });
    }

    // app.get("/api/reviews/:id", function(req, res) {
// db.Post.findOne({
//     where: {
//         id: req.params.id
//     }, 
//     include: [dB.User] 
// }).then(function(db) {
//     console.log(dbPost);
//     res.json(dbPost);
// });
    // });

    app.post("/api/reviews", function(req, res) {
        db.reviews.create(req.body).then(function(dbReviews) {
            res.json(dbReviews);
        });
    });

    // app.delete("/api/posts/:id", function(req, res) {})