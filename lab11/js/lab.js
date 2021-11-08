/**
 * Author:    Lexin Xiong
 * Created:   11/7/2021
 * License: Public Domain
 **/

var challengeEl = $("#challenge");
var problemsEl = $("#problems");
var resultsEl = $("#results");
var outputEl = $("#output");


challengeEl.append("<button id='c-button'>change appearance</button>");
problemsEl.append("<button id='p-button'>change appearance</button>");
resultsEl.append("<button id='r-button'>change appearance</button>");
outputEl.append("<button id='bonus-button'>change button appearance</butotn>");

$("#c-button").click(function() {
    $(this).parent().toggleClass("special");
});

$("#p-button").click(function() {
    $(this).parent().toggleClass("special");
});

$("#r-button").click(function() {
    $(this).parent().toggleClass("special");
});

$("#bonus-button").click(function() {
    $("button").toggleClass("buttonChange");
});
