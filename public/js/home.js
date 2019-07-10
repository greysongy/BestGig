$(document).ready(function () {
    // Here we get the inputs of the companies
    var nameInput = $("#name");
    var companyInput = $("#company")
    var ratingInput = $("#rating");
    var paymentInput = $("#payment")
    // The form used to get the user input
    var userDataForm = $("#userData")

    $(userDataForm).on('submit', function (event) {
        event.preventDefault();
        var newUserData = {
            name: nameInput.val().trim(),
            company: companyInput.val().trim(),
            rating: ratingInput.val().trim(),
            payment: paymentInput.val().trim()
        }
        console.log(newUserData)
        $.post("/api/userData", newUserData).then(function () {
            console.log("hello")
        })

    })
});