/*
* Author: Lexin Xiong <lxiong19@ucsc.edu>
* Created: 24 October
*/

//code for shuffle from https://www.codespeedy.com/shuffle-characters-of-a-string-in-javascript/
function shuffleUserName(){
  userNameshuffle = userName.toLowerCase().split("")
  userNameshuffle.sort(function(){
    return 0.5-Math.random(0,1);
  });
  userNameshuffle[0] = userNameshuffle[0].toUpperCase();
  shuffledName = userNameshuffle.join("");
  return shuffledName
};
//function shuffleUserName(){
  //shuffle = ("")
  //userNameshuffle = userName.split("")
  //for (i = userName.length; i--; ) {
    //random = userNameshuffle.splice(Math.floor(Math.random() * (i + 1)), 1)
    //shuffle=shuffle.concat(random)
//}
  //return shuffle
//}
function sortUserName() {
  //Code for remove space from a string come from https://www.geeksforgeeks.org/how-to-remove-spaces-from-a-string-using-javascript/
  userNamelower = userName.toLowerCase().replace(/ /g, "").split("");
  sortedName = userNamelower.sort().join("");
  return sortedName;
}

var userName = prompt("Hi. Please tell me your name so I can fix it.", "");

document.writeln("Oh hey, I've fixed your name: ", sortUserName(),"</br>");
document.writeln("Oh hey, I've shuffled your name: ", shuffleUserName(),"</br>")
