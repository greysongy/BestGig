// var db = require("../../../models");

$(document).ready(function() {
    var nameInput = $("#name");
    var companyInput = $("#company");
    var ratingInput = $("#rating");
    var payInput = $("#pay");
    var locationInput = $("#location");

    $("#submitReview").on("click", function(event) {
        console.log("Did we get here");
        event.preventDefault();
        var newReview = {
            company_name: companyInput.val().trim().toLowerCase()   , 
            username: nameInput.val().trim().toLowerCase(), 
            pay_per_hour: parseFloat(payInput.val().trim()), 
            rating: parseInt(ratingInput.val().trim(), 10), 
            location: locationInput.val().trim().toLowerCase()
        };

        console.log("New Review");
        console.log(newReview);

       

        $.ajax({
            method: "PUT",
            url: "/api/companies",
            data: newReview
        })
            .then(function () {
                window.location.href = "/test";
            })

        $.post("/api/reviews", newReview, function() {
            console.log("Sent new Review");
        })
    })
})