$(document).ready(function() {

    // putting variables in functions to avoid global variables
    var updateTime = function () {
        var currentTime = moment().format('h:mm:ss');
        $("#currentDay").text(currentTime);
    }

    // setting hour block times
    var updateColor = function () {
        var nine = moment().hours(9).minutes(0).second(0);
        var ten = moment().hours(10).minutes(0).second(0);
        var eleven = moment().hours(11).minutes(0).second(0);
        var twelve = moment().hours(12).minutes(0).second(0);
        var one = moment().hours(13).minutes(0).second(0);
        var two = moment().hours(14).minutes(0).second(0);
        var three = moment().hours(15).minutes(0).second(0);
        var four = moment().hours(16).minutes(0).second(0);
        var five = moment().hours(17).minutes(0).second(0);
        $("#nine").text(nine.format('h:mm'));
        $("#ten").text(ten.format('h:mm'));
        $("#eleven").text(eleven.format('h:mm'));
        $("#twelve").text(twelve.format('h:mm'));
        $("#one").text(one.format('h:mm'));
        $("#two").text(two.format('h:mm'));
        $("#three").text(three.format('h:mm'));
        $("#four").text(four.format('h:mm'));
        $("#five").text(five.format('h:mm'));
    } 

    // calling function to initially set time
    updateTime();
    updateColor();

    // set interval to continuously call function
    setInterval(updateTime, 1000);

    
    
    var b = moment();

});