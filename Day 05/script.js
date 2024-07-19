// Activity 3 Arrow functions

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const checkChar = () =>{
    const string = 'Deepanshu';
    const arr = [...string]
    console.log(arr.includes('p') ? true : false)
    
    // console.log(arr)
}
checkChar();