/**
 * Author:    Lexin Xiong
 * Created:   11/22/2021
 * License:   Public Domain
 **/

function fizzBuzz() {
  var oneLongStr = "";
  for(var i = 1; i <= 200; i++) {
    if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0 && i % 11 == 0) {
      oneLongStr += i + " FizzBuzzBoomBang!<br>";
    }
    else if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
      oneLongStr += i + " FizzBuzzBoom!<br>";
    }
    else if (i % 3 == 0 && i % 5 == 0) {
      oneLongStr += i + " FizzBuzz!<br>";
    }
    else if (i % 3 == 0 && i % 7 == 0) {
      oneLongStr += i + " FizzBoom!<br>";
    }
    else if (i % 3 == 0 && i % 11 == 0) {
      oneLongStr += i + " FizzBang!<br>";
    }
    else if (i % 5 == 0 && i % 7 == 0) {
      oneLongStr += i + " BuzzBoom!<br>";
    }
    else if (i % 5 == 0 && i % 11 == 0) {
      oneLongStr += i + " BuzzBang!<br>";
    }
    else if (i % 7 == 0 && i % 11 == 0) {
      oneLongStr += i + " BoomBang!<br>";
    }
    else if (i % 3 == 0) {
      oneLongStr += i + " Fizz!<br>";
    }
    else if (i % 5 == 0) {
      oneLongStr += i + " Buzz!<br>";
    }
    else if (i % 7 == 0) {
      oneLongStr += i + " Boom!<br>";
    }
    else if (i % 11 == 0) {
      oneLongStr += i + " Bang!<br>";
    }
    else {
      oneLongStr += i + "<br>";
    }
  }

  return oneLongStr;
}

$("#output").html(fizzBuzz());
