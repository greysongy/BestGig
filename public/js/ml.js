var values = [0, 0, 0, 4.75, 4.77, 4.81, 4.85, 4.90, 4.98, 5.06, 5,18, 5.32, 5.53, 5.83, 6.18, 6.77, 7.53, 8.31, 9.20, 9.93, 10.67, 
11.28, 11.69, 12.06, 12.30, 12.50, 12.66, 12.76, 12.85, 12.94, 13.09, 13.20, 13.18, 13.31, 13.49, 13.70, 14.03, 14.41, 15.06, 15.95, 
17.16, 18.67, 20.93, 23.91, 27.18, 30.95, 37.85, 39.44, 42.39, 44.36];


$(document).ready(function() {
    
    $("#calcEarnings").on("click", function() {
        var distance = $('#distance').val();
        console.log("Distance");
        console.log(distance);
        var convertedDistance = parseInt(distance);
        if(convertedDistance <= 50 && convertedDistance >= 3) {
            $('#fare').text('$ ' + values[convertedDistance]);
        }
        else {
            $('#fare').text('Please enter a valid value');
        }
        // if(parseFloat($('#distance').val()) >= 3 && parseFloat($('#distance').val()) <=50) {
        //     $('#fare').val(values[parseFloat($('#distance')).val()]);
        // }
        // else {
        //     $('#fare').val("Please enter a valid distance");
        // }

    })

})