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
                // Here is where we sort by pay

                for (var i = 0; i < dbCompanies.length; i++) {
                    $("#results").append(`<div class="row mt-5">
                    <div class="col-sm-2 ml-5" style="background-color: grey;">
                        <img src="https://via.placeholder.com/150">
                    </div>
                    <div class="col-sm-4 ml-2"><div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <div class="row mt-2" style="background-color: peachpuff;">
                                <div class="col-sm mini-box" id="companyName">${dbCompanies[i].company_name}</div>
                            </div>
                            <div class="row mt-3">
                                <div class="col-sm mini-box" id="rating"><i class="fa fa-star"> </i> <i class="fa fa-star">
                                    </i> <i class="fa fa-star"> </i></div>
                            </div>
                        </div>
    
                    </div>
                </div><div class="col-sm-2 ml-2" id="payBox">
                <button type="button" class="btn btn-outline-success text-dark">$${dbCompanies[i].average_pay_per_hour.toFixed(2)}</button>
            </div>
            <div class="col-sm-2 ml-2" id="linkBox">
                <div id="linkId">I am link</div>
            </div>
        </div>`)
                }

            })


        })
    })

});