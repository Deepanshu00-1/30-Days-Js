// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var number = 1;
console.log(number); 

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.
let string = "Hello";
console.log(string);

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const bool = true;
console.log(bool);

// Activity 3: Data Types

// Task 4: Create variables of different data types(number, string, boolean, object, array) and log each variable's type using the typeOf operator
const first = 1;
const second = "ABC";
const third = true;
const fourth = {
    name: "rohan",
    age: 20
}
const fifth = ["hello", "there"];

console.log(typeof(first),typeof(second),typeof(third),typeof(fourth),typeof(fifth));


// Activity 4: Reasoning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.
let orange = "fruit";
console.log(orange)
orange = "color";
console.log(orange)

// Activity 5: Understanding const
// Task 6: Try reassigning a variable declared with const and observe the error
const apple = 'fruit';
apple ="juice"; 