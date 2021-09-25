// console.log(arguments);
// console.log(require("module").wrapper);

//================
// Solution 01
// const Calculator = require("./modules-1");
//creating a calculator new instance
// const calc1 = new Calculator();
// console.log(calc1.add(5, 2));

//======================
// Solution 02
// const calculator = require("./moduels-2");
// console.log(calculator.add(5, 2));.

//=======================
// Solution 03
// const { add, multiply, divide } = require("./moduels-2");
// console.log(add(1, 2));
// console.log(multiply(2, 3));
// console.log(divide(2, 3));

//=======================
// Solution 04
// require("./modules-3")();
// require("./modules-3")();
// require("./modules-3")();
// require("./modules-3")();
// Top level coding executes at once
// other code is cached by node to execute again and again
