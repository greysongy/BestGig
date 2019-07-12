
$(document).ready(function () {

    // Feel free to change the info here! The get is used to grab info from the sql database and post the info on the home.html page.

    // This wants to get the data from the api route /api/reviews/oakland.
    $.get("/api/reviews/oakland", function (data) {
        reviews = data
        console.log(reviews)
        console.log("FOR UBER AVG RATING")
        console.log("Location: Oakland")
        console.log("Find the average review of company at this location.")
        var sum = 0

        // Here we go through all the reviews and add them to the variable sum
        for (var i = 0; i < reviews.length; i++) {
            sum += parseInt(reviews[i].rating)
        }
        // We divide the sum by the number of reviews for that location to get the average reviews for that company in Oakland
        var avgRating = (sum / reviews.length)
        console.log(avgRating)

    })

    // Look at the above code to understand whats going on here
    $.get("/api/reviews/sf", function (data) {
        reviews = data
        console.log(reviews)
        console.log("Location: San Francisco")
        console.log("Find the average review of company at this location.")
        var sum = 0

        for (var i = 0; i < reviews.length; i++) {
            sum += parseInt(reviews[i].rating)
        }
        var avgRating = (sum / reviews.length)
        console.log(avgRating)

    })


    var companies = []

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

            $("#company-name").text(companyName)
            $("#average-rating").text(companyRating)
            $("#average-pay").text(companyPay)
            $("#number-reviews").text(companyReviews)
        } else {
            console.log("No data to show! To see already created tables, remove force: true in server.js towards the bottom of the page")
        }


    })
})