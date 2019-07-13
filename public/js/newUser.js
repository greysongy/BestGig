// This file grabs user information to send it to the users-api-route. There it will create a new user entry

$(document).ready(function () {
    $(window).load(function () {
        $("#myModal").modal("show");
    })
    $('#myModal').modal({
        backdrop: 'static',
        keyboard: false
    });

    $("#submitUser").on("click", function (event) {

        event.preventDefault()

        // Here we get the inputs of the companies
        var nameInput = $("#user-name").val().trim().toLowerCase();
        var emailInput = $("#user-email").val()
        var locationInput = $("#city").val().trim().toLowerCase();

        // Place all the userData in an object to send 
        var newUserData = {
            username: nameInput,
            email: emailInput,
            location: locationInput
        }

        // Here we post the new user data
        $.post("/api/users", newUserData).then(function () {
            console.log("New User Added!", newUserData.username)

            // Once the post is complete, we will return back data on companies from that location
            var companyLocation = locationInput.replace(" ", "-")

            $.get("/api/companies/" + companyLocation).then(function (dbCompanies) {
                console.log(dbCompanies)
                for (var i = 0; i < dbCompanies.length; i++) {
                    $("#companies").append(`<h1>${dbCompanies[i].company_name}</h1>`)
                }

            })


        })


        // Using the company location, we can get all the companies from that location using this

        // but now how can we render our page?



    })

});