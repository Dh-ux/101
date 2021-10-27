/*
 * Author: Lexin Xiong
 * Created: October 26 2021
 * License: Public Domain
*/
function sqrt(x){
    var results = Math.sqrt(x);
    return results;
}


console.log("what is the square root of 100?", sqrt(100));
console.log("what is the square root of 5", sqrt(5));


array = [2, 76, 3, 12, 19, 20]
console.log("This is my array: ", array);


var numResult = array.map(sqrt);


console.log("Let's see the square root of the array.", numResult);


var numResult = array.map(function(x){
  return x * 0.2;
})

console.log("Multiply 0.2 to the array: ", numResult);
