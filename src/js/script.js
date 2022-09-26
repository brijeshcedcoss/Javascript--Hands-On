// JS Variables - Exercise 1
// Create a variable called carName, assign the value Volvo to it.
var carName = "Volvo";

// JS Variables - Exercise 2
// Create a variable called x, assign the value 50 to it.
var x = 50;

// JS Variables - Exercise 3
// Display the sum of 5 + 10, using two variables: x and y.
var x = 5;
var y = 10;
document.getElementById("demo").innerHTML = x + y;

// JS Variables - Exercise 4
// Create a variable called z, assign x + y to it, and display the result in an alert box.
var x = 5;
var y = 10;
var z = x + y;
alert("5 + 10 = " + z);

// JS Variables - Exercise 5
/* On one single line, declare three variables with the following names and values:
 firstName = "John";
 lastName = "Doe";
 age = 35; */
var firstName = "John",
  lastName = "Doe",
  age = 35;

// JS Operators - Exercise 1
// Multiply 10 with 5, and alert the result:
alert("10 * 5 = " + 10 * 5);

// JS Operators - Exercise 2
// Divide 10 by 2, and alert the result:
alert("10 / 2 = " + 10 / 2);

// JS Operators - Exercise 3
// Alert the remainder when 15 is divided by 9.
alert("15 % 9 = " + (15 % 9));

// JS Operators - Exercise 4
// Use the correct assignment operator that will result in x being 15 (same as x = x + y).
x = 10;
y = 5;
x += y;

// JS Operators - Exercise 5
// Use the correct assignment operator that will result in x being 50 (same as x = x * y).
x = 10;
y = 5;
x *= y;

// JS Data Types - Exercise 1
// Use comments to describe the correct data type of the following variables:
let length = 16; //Number;
let last_Name = "Johnson"; //String;
const X = {
  firstName: "John",
  lastName: "Doe",
}; //Object;

// JS Functions - Exercise 1
// Execute the function named myFunction.
function myFunction_1() {
  alert("Hello World!");
}
myFunction_1();

// JS Functions - Exercise 2
// Create a function called "myFunction".
function myFunction_2() {
  alert("Hello World!");
}

// JS Functions - Exercise 3
// Make the function return "Hello".
function myFunction_3() {
  return "Hello";
}
document.getElementById("demo_2").innerHTML = myFunction_3();

// JS Functions - Exercise 4
// Make the function display "Hello" in the inner HTML of an element with the ID "demo".
function myFunction_4() {
  document.getElementById("demo_3").innerHTML = "Hello";
}

// JS Objects - Exercise 1
// Alert "John" by extracting information from the person object.
const person = {
  firstName: "John",
  lastName: "Doe",
};
alert(person.firstName);
