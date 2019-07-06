// Callback example 1
class Greet {
  greeting(name) {
    return "Hello, " + name + "!";
  }

  processGreeting(callback, arg = "Callback") {
    return callback(arg);
  }
}

// Callback example 2
class ArithmeticOperation {
  processNumbers(num1, num2, callback) {
    return callback(num1, num2);
  }

  addition(a, b) {
    return a + b;
  }

  subtraction(a, b) {
    return b - a;
  }

  multiplication(a, b) {
    return b * a;
  }

  division(a, b) {
    return b / a;
  }
}

module.exports = { Greet, ArithmeticOperation };

// A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// More complexly put: In JavaScript, functions are objects. Because of this, functions can take functions as arguments, and can be returned by other functions. Functions that do this are called higher-order functions. Any function that is passed as an argument is called a callback function.

// We can do this because JavaScript has first-class functions, which can be assigned to variables and passed around to other functions (called higher-order functions)
