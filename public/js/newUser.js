// This file grabs user information to send it to the users-api-route. There it will create a new user entry

$(document).ready(function () {

    // Here we get the inputs of the companies
    var nameInput = $("#user-name");
    var companyInput = $("#company")
    var ratingInput = $("#rating");
    var paymentInput = $("#payment")
    var locationInput = $("#location")
    // The form used to get the user input
    var userDataForm = $("#userData")

    $(userDataForm).on('submit', function (event) {
        event.preventDefault();
        var newUserData = {
            user_name: nameInput.val().trim(),
            location: locationInput.val().trim()
        }

        // Here, the newUserData will be sent in the req.body to the route /api/users in the users-api-route
        $.post("/api/users", newUserData).then(function () {
            console.log("Updated Users Data")
        })

    })
});