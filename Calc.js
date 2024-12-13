let prompt = require('prompt-sync')()

let name = (prompt("What is your name? "));
console.log(`Hi ${name}, Welcome to our console calculator!!!`);

let operation;
while (operation !== '+' && operation !== '-' && operation !== '/' && operation !== '*') {
    operation = prompt('What operation would you like to perform today? ')
    if (operation !== '+' && operation !== '-' && operation !== '/' && operation !== '*') {
        console.log('Wrong input, please enter correct operations! ');
    }
}
    // let operation  = prompt('What operation would you like to perform today? ')
    let firstNumber = parseFloat(prompt('Enter the first number '))
    let secondNumber = parseFloat(prompt('Enter the second number '))

if (isNaN(firstNumber) || isNaN(secondNumber)) {
    console.log('Please enter an integer');
    process.exit()
}

function caculate (a , b){
    if (operation === '+') {
        return a + b
    } else if (operation === '-') {
        return a - b
    } else if (operation === '/') {
        return a / b
    } else if (operation === '*') {
        return a * b
    }

    
}
if (operation === '+') {
    console.log(`The sum is ${caculate(firstNumber , secondNumber)}`);
    
} else if (operation === '-') {
    console.log(`The diference is ${caculate(firstNumber , secondNumber)}`);
}  else if (operation === '/') {
    console.log(`The division is ${caculate(firstNumber , secondNumber)}`);
} else if (operation === '*') {
    console.log(`The product is ${caculate(firstNumber , secondNumber)}`);
}




// if (operation === "+") {
//     console.log(`The summation of your numbers is ${firstNumber + secondNumber}`);
// } else if (operation === "-") {
//     console.log(`The difference of your numbers is ${firstNumber - secondNumber}`);
// } else {
//     console.log("");
// }




