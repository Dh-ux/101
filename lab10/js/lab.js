/*
* Author: Lexin Xiong <lxiong19@ucsc.edu>
* Created: 11/2/2021
*/


function sortUserName(name) {
  name = name.toLowerCase().replace(/ /g, "").split("");
  var sortedName = name.sort().join("");
  return sortedName;
};

var userNameEl = document.getElementById("user-name");
var buttonEl = document.getElementById("my-button");
var outputEl = document.getElementById("output");
var sortedEl = document.createElement("p");


sortedEl.innerHTML = "Your sorted name";
outputEl.appendChild(sortedEl);


buttonEl.addEventListener("click", function() {
  var userName = userNameEl.value;
  var sortedName = sortUserName(userName);

  sortedEl.innerHTML = "<pre>" + sortedName + "</pre>";


});
