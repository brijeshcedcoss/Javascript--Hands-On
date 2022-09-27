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
function myFunction() {
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

// JS Objects - Exercise 2
// Add the following property and value to the person object: country: Norway.
const person_2 = {
  firstName: "John",
  lastName: "Doe",
  country: "Norway",
};

// JS Objects - Exercise 3
// Create an object called person with name = John, age = 50.Then, access the object to alert("John is 50").
const person_3 = {
  name: "John",
  age: 50,
};
alert(person_3.name + " is " + person_3.age);

// JS Strings - Exercise 1
// Use the length property to alert the length of txt.
let txt = "Hello World!";
let len = txt.length;
alert("Length of Hello World! " + len);

// JS Strings - Exercise 2
// Use escape characters to alert We are "Vikings".
let txt_2 = 'We are "Vikings"';
alert(txt_2);

// JS Strings - Exercise 3
// Concatenate the two strings to alert "Hello World!".
let str1 = "Hello ";
let str2 = "World!";
alert(str1 + str2);

// JS Strings Methods - Exercise 1
// Convert the text into an UPPERCASE text:
let txt_3 = "Hello World!";
txt = txt_3.toUpperCase();

// JS Strings Methods - Exercise 2
// Use the slice method to return the word "bananas".
let txt_4 = "I can eat bananas all day";
let t_slice = txt_4.slice(10, 17);

// JS Strings Methods - Exercise 3
// Use the correct String method to replace the word "Hello" with the word "Welcome".
let txt_5 = "Hello World";
txt_5 = txt_5.replace("Hello", "Welcome");

// JS Strings Methods - Exercise 4
// Convert the value of txt to upper case.
let txt_6 = "Hello World";
txt_6 = txt_6.toUpperCase();

// JS Strings Methods - Exercise 5
// Convert the value of txt to lower case.
let txt_7 = "Hello World";
txt_7 = txt_7.toLowerCase();

// JS Array - Exercise 1
// Get the value "Volvo" from the cars array.
const cars_3 = ["Saab", "Volvo", "BMW"];
let first = cars_3[1];

// JS Array - Exercise 2
// Change the first item of cars to "Ford".
const cars_4 = ["Volvo", "Jeep", "Mercedes"];
cars_4[0] = "Ford";

// JS Array - Exercise 3
// Alert the number of items in an array, using the correct Array property.
const cars_5 = ["Volvo", "Jeep", "Mercedes"];
alert(cars_5.length);

// JS Array Methods - Exercise 1
// Use the correct Array method to remove the last item of the fruits array.
const fruits = ["Banana", "Orange", "Apple"];
fruits.pop();

// JS Array Methods - Exercise 2
// Use the correct Array method to add "Kiwi" to the fruits array.
const fruits_2 = ["Banana", "Orange", "Apple"];
fruits_2.push("Kiwi");

// JS Array Methods - Exercise 3
// Use the splice() method to remove "Orange" and "Apple" from fruits.
const fruits_3 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits_3.splice(1, 2);

// JS Array Sort - Exercise 1
// Use the correct Array method to sort the fruits array alphabetically.
const fruits_4 = ["Banana", "Orange", "Apple", "Kiwi"];
fruits_4.sort();

// JS Dates - Exercise 1
// Create a Date object and alert the current date and time.
const d = new Date();
alert(d);

// JS Dates - Exercise 2
// Use the correct Date method to extract the year (four digits) out of a date object.
const d_1 = new Date();
year = d_1.getFullYear();

// JS Dates - Exercise 3
// Use the correct Date method to get the month (0-11) out of a date object.
const d_2 = new Date();
month = d_2.getMonth();

// JS Dates - Exercise 4
// Use the correct Date method to set the year of a date object to 2020.
const d_3 = new Date();
d_3.setFullYear(2020);

// JS Math - Exercise 1
// Use the correct Math method to create a random number.
let r = Math.random();

// JS Math - Exercise 2
// Use the correct Math method to return the largest number of 10 and 20.
let m = Math.max(10, 20);

// JS Math - Exercise 3
// Use the correct Math method to round a number to the nearest integer.
let m_2 = Math.round(5.3);

// JS Math - Exercise 4
// Use the correct Math method to get the square root of 9.
let m_3 = Math.sqrt(9);

// JS Comparisons - Exercise 1
// Choose the correct comparison operator to alert true, when x is greater than y.
x_5 = 10;
y_5 = 5;
alert(x_5 > y_5);

// JS Comparisons - Exercise 2
// Choose the correct comparison operator to alert true, when x is equal to y.
x_6 = 10;
y_6 = 5;
alert(x_6 == y_6);

// JS Comparisons - Exercise 3
// Choose the correct comparison operator to alert true, when x is NOT equal to y.
x_7 = 10;
y_7 = 5;
alert(x_7 != y_7);

// JS Comparisons - Exercise 4
// Choose the correct conditional (ternary) operator to alert "Too young" if age is less than 18, otherwise alert "Old enough".
var age = 28;
var voteable = age < 18 ? "Too young" : "Old enough";
alert(voteable);

// JS Conditions - Exercise 1
// Fix the if statement to alert "Hello World" if x is greater than y
if (x > y) {
  alert("Hello World");
}

// JS Conditions - Exercise 2
// Fix the if statement to alert "Hello World" if x is greater than y, otherwise alert "Goodbye".
if (x > y) {
  alert("Hello World");
} else {
  alert("Goodbye");
}

// JS Switch - Exercise 1
// Create a switch statement that will alert "Hello" if fruits is "banana", and "Welcome" if fruits is "apple".
switch (fruits) {
  case "Banana":
    alert("Hello");
    break;

  case "Apple":
    alert("Welcome");
    break;
}

// JS Switch - Exercise 2
// Add a section that will alert("Neither") if fruits is neither "banana" nor "apple".
switch (fruits) {
  case "Banana":
    alert("Hello");
    break;
  case "Apple":
    alert("Welcome");
    break;
  default:
    alert("Neither");
}

// JS For Loops - Exercise 1
// Create a loop that runs from 0 to 9.
let i;
for (i = 0; i < 10; i++) {
  console.log(i);
}

// JS For Loops - Exercise 2
// Create a loop that runs through each item in the fruits array.
const fruits_5 = ["Apple", "Banana", "Orange"];
for (x of fruits_5) {
  console.log(x);
}

// JS While Loops - Exercise 1
// Create a loop that runs as long as i is less than 10.
let i_1 = 0;
while (i_1 < 10) {
  console.log(i_1);
  i++;
}
