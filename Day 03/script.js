// Activity 1: If-Else Statements

// Task 1: Write a program to check if a number is positive, negative, zero and log result to console.
const num = 5;
if(console.log(Math.sign(num)) == 1){
    console.log('number is positive')
}else if(console.log(Math.sign(num)) == -1){
    console.log('number is negative')
}else{
    console.log('number is zero')
}

// Task 2: Write  a progarm to check whether a person is eligible to vote (age>=18) and log the result to console.log
const age = 18;
if(age>=18){
    console.log('person is eligible to vote')
}

// Activity 2: Nested If-Else Statements
// Task 3 : Write a program to find the largest of three numbers using nested if-else statements.

let num1 = 10;
let num2 = 20;
let num3 = 30;

if(num1>(num2,num3)){
    console.log('num1 is greater')
}else if(num2>(num1,num3)){
    console.log('num2 is greater')
}else{
    console.log('num3 is greater')
}