// The purpose of this file is to return back companies when a specific location is entered

$(document).ready(function () {

    $("#submit").on("click", function () {
        $("#results").empty();

        // Grab text from location input
        // var location = $("#location-search").val().trim()
        // location = location.replace(/\s+/g, "-").toLowerCase();

        //may need to be formatted further
        var company = $("#company-search").val();

        // Perform a get from companies based on the name
        $.get("/api/companies/cname/" + company).then(function (data) {
            reviews = data;
            // console.log("Data from that Company");
            // console.log(data);

            var sortedCompanies = mergeSort(data);

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

            for (var i = sortedCompanies.length - 1; i >= 0; i--) {
                //code to format name when it's made up of multiple words
                var splitName = sortedCompanies[i].company_name.toLowerCase().split(" ").join().replace(/,/, "");
                //code to get and round rating
                var rating = sortedCompanies[i].average_rating;
                var roundedRating = Math.round(rating);
                //same values are modified, but with split Name & sorted company parameters NOTE; there were problems setting the size of the logo, so we may need to discuss
                $("#results").append(`<div class="row mt-5">
                <div class="col-sm-2 ml-5" style="background-color: grey;">
                    <img src="https://logo.clearbit.com/${splitName}.com">
                </div>
                <div class="col-sm-4 ml-2"><div class="container">
                <div class="row">
                    <div class="col-sm">

                        <div class="row mt-2" style="background-color: peachpuff;">
                            <div class="col-sm-4" id="companyName">${sortedCompanies[i].company_name + " " + sortedCompanies[i].location}</div>
                        </div>
                        <div class="row mt-3">
                            <h1>Average Rating: ${sortedCompanies[i].average_rating}<h1>
                            <div class="col-sm" id="compRating${i}"><div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-2 ml-2" id="payBox">
            <button type="button" class="btn btn-outline-success text-dark">$${sortedCompanies[i].average_pay_per_hour.toFixed(2)}</button>
        </div>
        <div class="col-sm-2 ml-2" id="linkBox">
            <div id="linkId">I am link</div>
        </div>
            </div>
    </div>`);
                for (var j = 0; j < roundedRating; j++) {
                    $('#compRating' + i).append(`<i class="fa fa-star">`);
                }
            }

            // Now that we have all the reviews for companies at this location, we now want to have a list of all the companies
            var companies = []
            for (var j = 0; j < reviews.length; j++) {
                if (!companies.includes(reviews[j].company_name)) {
                    companies.push(reviews[j].company_name)
                }
            }

            // For each company at this location, we will take the sum of its ratings and pay, divide it by its length, and console log the average rating and average pay for the company
            var companyInfo = []
            console.log(location)
            for (var k = 0; k < companies.length; k++) {
                var company = companies[k]
                var ratingSum = 0
                var paySum = 0
                var length = 0
                for (var l = 0; l < reviews.length; l++) {
                    if (reviews[l].company_name === companies[k]) {
                        ratingSum += parseInt(reviews[l].rating)
                        paySum += reviews[l].pay_per_hour
                        length++
                    }
                }
                var avgRating = (ratingSum / length).toFixed(2)
                var avgPayPerHour = (paySum / length).toFixed(2)
                console.log(company, "average rating:", avgRating)
                console.log(company, "average pay per hour:", avgPayPerHour)
                var companyAndSum = [company, avgRating, avgPayPerHour]
                companyInfo.push(companyAndSum)
            }

        })
    })


    // Here we look at the route /api/companies to find data for companies
    $.get("/api/companies", function (data) {
        companies = data;
        console.log(companies)
        if (data) {
            company = companies[0]
            companyName = company.company_name.toString()
            companyRating = company.average_rating.toString()
            companyPay = company.average_pay_per_hour.toString()
            companyReviews = company.number_reviews.toString()
            companyLocation = company.location.toString()

            $("#company-name").text(companyName)
            $("#average-rating").text(companyRating)
            $("#average-pay").text(companyPay)
            $("#number-reviews").text(companyReviews)
            $("#company-location").text(companyLocation)
        } else {
            console.log("No data to show! To see already created tables, remove force: true in server.js towards the bottom of the page")
        }


    })
})
