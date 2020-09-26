$(document).ready(function() {

    // setting current time display
    var updateTime = function () {
        var currentTime = moment().format('dddd, MMMM Do, YYYY');
        $("#currentDay").text(currentTime);
    };

    // object to aid in creating html elements using each()
    var numLetts = {
        seventeen: 17,
        sixteen: 16,
        fifteen: 15,
        fourteen: 14,
        thirteen: 13,
        twelve: 12,
        eleven: 11,
        ten: 10,
        nine: 9
    };

    // loop through key/value pairs in numLetts object and create html elements for each. values used to set hour block time. keys used to create id's.
    $.each(numLetts,function(key,value) {
        var $div = $("<div>", {
            "class": "container"
        });

        var $smallDiv = $("<div>", {
            "class": "row justify-content-center"
        });
        
        var $para = $("<p>", {
            "class": "hour col-md-1 hourHook", 
            style: "float:left"
        });
        
        if (value>11) {
            var $paraSpan = $("<span>", {
                id: key,
                text: moment().hours(value).minutes(0).seconds(0).format('h')+"PM"
            });
        } else {
            var $paraSpan = $("<span>", {
                id: key,
                text: moment().hours(value).minutes(0).seconds(0).format('h')+"AM"
            });
        }
        
        var $textInp = $("<textarea>", {
            "class": "col-md-10"
        });
        
        var $btn = $("<button>", {
            "class": "saveBtn col-md-1",
            text: "Save"
        });
        
        $para.append($paraSpan);
        $smallDiv.append($para, $textInp, $btn);
        $div.append($smallDiv);
        $div.insertAfter($("header"));
    })

    // for each element with the hourHook class, apply the function that compares the current time with the set time in the hour block, and appropriately color the textarea
    var colorCode = function() {
        $.each($(".hourHook"),function() {
            var numConv = numLetts[($(this).find("span").attr('id'))];
            var hourInt = moment().hours(numConv).minutes(0).seconds(0);

            if (hourInt.diff(moment(),'seconds') < -3600) {
                $(this).next().css("background-color","#d3d3d3");
            } else if (hourInt.diff(moment(),'seconds') > 0) {
                $(this).next().css("background-color","#77dd77");
            } else {
                $(this).next().css("background-color","#ff6961");
            }
        });
    };
        
    // saving input to local storage. event listener applied to all buttons. if the user saves an empty block, clear localstorage for that key
    $("button").on("click", function (event) {
        event.preventDefault();
        var textItem = $(this).prev().val();
        var findID = $(this).parent().find("span").attr("id");
        if (textItem.trim() === '' ? localStorage.removeItem(findID): localStorage.setItem(findID,textItem.trim()));
    });

    // get items from local storage. for each textarea element, apply the function that retrieves the value from local storage based on a corresponding ID
    $("textarea").each(function() {
        var findID = $(this).prev().find("span").attr("id");
        var storedItems = localStorage.getItem(findID);
        $(this).val(storedItems);
    });

    // calling functions
    updateTime();
    colorCode();

    // set interval to continuously call functions. ensures color coding is updated and that the displayed time is correct, by the second 
    setInterval(updateTime, 1000);
    setInterval(colorCode, 1000);
    
});