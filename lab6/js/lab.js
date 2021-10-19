/*
* Author: Lexin Xiong <lxiong19@ucsc.edu>
* Created: 19 October
* License: Public Domain
*/

// Define variables
myTransport = ["Lexus ES", "bus", "rides from friends", "uber"];

myMainRide = {
  make: "Lexus",
  model: "ES",
  color: "Black",
  year: 2013,
  age : function() {
    return 2021 - age;
  }
}

//Output
document.writeln("Kinds of transportation I use: ", myTransport, "</br>");
document.writeln("My Main Ride: <pre>",
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
