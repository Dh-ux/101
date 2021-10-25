/*
* Author: Lexin Xiong <lxiong19@ucsc.edu>
* Created: 24 October
*/
function sortUserName() {
  //Code for remove space from a string come from https://www.geeksforgeeks.org/how-to-remove-spaces-from-a-string-using-javascript/
  userName = userName.toLowerCase().replace(/ /g, "").split("");
  var sortedName = userName.sort().join("");
  return sortedName;
}
var userName = prompt("Hi. Please tell me your name so I can fix it.", "");
document.writeln("Oh hey, I've fixed your name: ", sortUserName(),"</br>");
document.writeln(namelength)
