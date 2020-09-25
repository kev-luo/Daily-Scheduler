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
        $("#nine").text(nine.format('h'));
        $("#ten").text(ten.format('h'));
        $("#eleven").text(eleven.format('h'));
        $("#twelve").text(twelve.format('h'));
        $("#thirteen").text(one.format('h'));
        $("#fourteen").text(two.format('h'));
        $("#fifteen").text(three.format('h'));
        $("#sixteen").text(four.format('h'));
        $("#seventeen").text(five.format('h'));

        var numLetts = {
            nine: 9,
            ten: 10,
            eleven: 11,
            twelve: 12,
            thirteen: 13,
            fourteen: 14,
            fifteen: 15,
            sixteen: 16,
            seventeen: 17
        };

        console.log(moment().diff(moment().hours(17).minutes(0).seconds(0),'hours'));
        $.each($(".hourHook"),function() {
            var numConv = numLetts[($(this).find("span").attr('id'))];
            var hourInt = moment().hours(numConv).minutes(0).seconds(0);
            // console.log(numLetts[($(this).find("span").attr('id'))]);
            // console.log(moment(),'seconds');
            // console.log(hourInt);

               if (hourInt.diff(moment(),'seconds') < -3600) {
            // if (hourInt.diff(moment(),'seconds') < -3600) {
                $(this).next().css("background-color","#d3d3d3");

               } else if (hourInt.diff(moment(),'seconds') > 0) {
            // } else if (hourInt.diff(moment(),'seconds') > 0) {
                $(this).next().css("background-color","#77dd77");
            } else {
                $(this).next().css("background-color","#ff6961");
            }
        })
        


        // $(".col-md-10").css("background-color",)
    } 

    // saving input to local storage
    $("button").on("click", function (event) {
        event.preventDefault();
        var textItem = $(this).prev().val();
        localStorage.setItem($(this).parent().find("span").attr('id'),textItem.trim());

    });

    window.onbeforeunload = function() {
        $.each($(".hour"), function() {
            // console.log($(this).children("span").attr("id"));
            // console.log(JSON.parse(localStorage.getItem($(this).children("span").attr("id"))));
            console.log($(this).next());
            // var items = (localStorage.getItem($(this).children("span").attr("id")));
            
            $(this).next().val((localStorage.getItem($(this).children("span").attr("id"))));
            // $("#currentDay").append($("<div>").val($this).find("span").attr("id"));
            // console.log(localStorage.getItem($(".container").find("span").attr("id")));

            // var oldItems = localStorage.getItem($(".container").find("span").attr("id"));
            // $(".container").find(".col-md-10").val(oldItems);
        })
    }

    // calling function to initially set time
    updateTime();
    updateColor();

    // set interval to continuously call function
    setInterval(updateTime, 1000);
    setInterval(updateColor, 1000);


});