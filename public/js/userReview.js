// This file is used to submit a new entry into the reviews model and update/create in the companies model

$(document).ready(function () {

    // Grab all of our info
    var nameInput = $("#name");
    var companyInput = $("#company");
    var ratingInput = $("#rating");
    var payInput = $("#pay");
    var locationInput = $("#location");

    $("#submitReview").on("click", function (event) {
        event.preventDefault();

        // Put our info in the package newReview
        var newReview = {
            company_name: companyInput.val().trim().toLowerCase(),
            username: nameInput.val().trim().toLowerCase(),
            pay_per_hour: parseFloat(payInput.val().trim()),
            rating: parseInt(ratingInput.val().trim(), 10),
            location: locationInput.val().trim().toLowerCase()
        };

        console.log("New Review");
        console.log(newReview);

        // Here we use a PUT at the route /api/companies with the data package newReview. Now you should check the companies-api-routes.js for the /api/companies route with the method PUT!
        $.ajax({
            method: "PUT",
            url: "/api/companies",
            data: newReview
        })
            // Once the promise has been fulfilled, now we will reload the test route
            .then(function () {
                window.location.href = "/test";
            })

        // Here we will send in a new review to the route /api/reviews in the form of a data package
        $.post("/api/reviews", newReview, function () {
            console.log("Sent new Review");
        })
    })
})