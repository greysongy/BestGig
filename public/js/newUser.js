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
                // Currently sorting by pay
                var sortedCompanies = mergeSort(dbCompanies);

                //imported code for merge sort
                function mergeSort(arr) {
                    if (arr.length < 2)
                        return arr;

                    var middle = parseInt(arr.length / 2);
                    var left = arr.slice(0, middle);
                    var right = arr.slice(middle, arr.length);

                    return merge(mergeSort(left), mergeSort(right));
                }

                //imported code for merge sort
                function merge(left, right) {
                    var result = [];

                    while (left.length && right.length) {
                        if (left[0].average_pay_per_hour <= right[0].average_pay_per_hour) {
                            result.push(left.shift());
                        } else {
                            result.push(right.shift());
                        }
                    }

                    while (left.length)
                        result.push(left.shift());

                    while (right.length)
                        result.push(right.shift());

                    return result;
                }

                //for loop now iterates in opposite direction, since merge sort sorts from smalles to largest value
                for (var i = sortedCompanies.length - 1; i >= 0; i--) {
                    //code to format name when it's made up of multiple words
                    var splitName = sortedCompanies[i].company_name.toLowerCase().split(" ").join().replace(/,/, "");
                    var rating = sortedCompanies[i].average_rating;
                    var roundedRating = Math.round(rating);
                    //same values are modified, but with split Name & sorted company parameters NOTE; there were problems setting the size of the logo, so we may need to discuss
                    $("#results").append(` <div class="container">
                    <div class="row mt-5">
                    <div class="col-sm-2 ml-5 mt-2 align-middle logo">
                        <img src="https://logo.clearbit.com/${splitName}.com">
                    </div>

 
                        <div class="col-sm-3">
                            <div class="row mt-2" >
                                <div class="col-sm mt-2 mini-box" id="companyName">${sortedCompanies[i].company_name}</div>
                            </div>
                        </div>
    
                        <div class="col-sm ml-2 mt-4" id="payBox">
                            Average Pay: <br><br>
                            <button type="button" class="btn btn-outline-success text-dark" id="ratePay"> 
                            
                            $${sortedCompanies[i].average_pay_per_hour.toFixed(2)}</button>
                        </div>
                            
                        <div class="col-sm mt-4" id="compRating${i}">Average Rating: <br> <br></div>
                        

                        </div> 
                    </div>`)




                    for (var j = 0; j < roundedRating; j++) {
                        $('#compRating' + i).append(`<i class="fa fa-star">`);
                    }
                }

            })


        })
    })

});