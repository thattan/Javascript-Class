"use strict";
var $ = function(id) {
    return document.getElementById(id);
};

window.onload = function() {

    var values = [];
    var nameValues = [];

    var displayScores = function() {
        var out = "";
        var avg = 0;
        var total = 0;
        
        for (var i = 0; i < values.length; i++)
        {         
            total += values[i];
            out += nameValues[i];
        }

        avg = total / values.length;

        $("scores").value = out;
        $("average_score").value = avg;
    };

    $("add_button").onclick = function() {

        // get the add form ready for next entry
        var first = $("first_name").value;
        var last = $("last_name").value;
        var score = $("score").value;

        if (first === "" || last === "")
        {
            alert("First name and last name are required fields");
        } else if (isNaN(score))
        {
            alert("Score must be a number");
        } else {
            values.push(score);
            nameValues.push(last + ", " + first + ": " + score + "\n");
        }

        $("first_name").value = "";
        $("last_name").value = "";
        $("score").value = "";
        $("first_name").focus();
        displayScores();
    }
    ;
    // end onclick

    $("clear_button").onclick = function() {

        // remove the score data from the web page
        values = [];
        nameValues = [];

        $("average_score").value = "";
        $("scores").value = "";

        $("first_name").focus();
    }
    ;
    // end onclick

    $("sort_button").onclick = function() {
        nameValues.sort();
        displayScores();
    }
    ;
    // end onclick

    $("first_name").focus();
};
