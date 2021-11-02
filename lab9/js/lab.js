/**
 * Author:    Lexin Xiong
 * Created:   10/31/2021
 * License: Public Domain.
 **/

var outputEl = document.getElementById("output");


var new1El = document.createElement("p");
new1El.innerHTML= "This text is helvetica and has blue backrground.";
new1El.setAttribute("style", "background-color:#88bbe0");

var new2El = document.createElement("p");
new2El.innerHTML= "This text is small and red.";
new2El.setAttribute("style", "font-size: 60%");

outputEl.appendChild(new1El);
outputEl.appendChild(new2El);

new1El.style.fontFamily = "Helvetica";
new2El.style.color ="red";
