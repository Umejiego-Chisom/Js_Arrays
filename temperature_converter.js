// const prompt = require('prompt-sync')();

// console.log("Welcome to the Temperature converter!");

// while (true) {
//     const measurement = prompt('What temperature measurements would you like to use (Celsius or Kelvin)? ').trim();

//     if (measurement !== 'Celsius'  || measurement !== 'Kelvin') {
//         console.log('You have to either enter kelvin or celsius');
//         break
//     }

//     const temperature = parseFloat(prompt(`Enter the temperature ${measurement} `));

//     if (isNaN(temperature)) {
//         console.log("ERROR: Please enter a valid number for the temperature");
//     } else if (measurement === 'Celsius') {
//         console.log(`Your current temperature in Celsius is ${temperature + 273}°C`);
//     } else if (measurement === 'Kelvin') {
//         console.log(`Your current temperature in Kelvin is ${temperature - 273}°K`);
//     } else {
//         console.log("Enter either (Celsius or Kelvin) to use this temperature converter.");
//         continue;
//     }

//     let restart = prompt('Would you like to convert to another temperature (yes or no)? ').trim().toLowerCase();
//     if (restart !== 'YES') {
//         console.log("Thank you for using this temperature converter. Goodbye!");
//         break;
//     }
// }


const prompt = require('prompt-sync')();

console.log("Welcome to the Temperature Converter!");

while (true) {
    const measurement = prompt('What temperature measurements would you like to use (Celsius or Kelvin)? ').trim().toLowerCase();

    if (measurement !== 'celsius' && measurement !== 'kelvin') {
        console.log('You have to either enter Kelvin or Celsius');
        continue;
    }

    const temperature = parseFloat(prompt(`Enter the temperature in ${measurement}: `));

    if (isNaN(temperature)) {
        console.log("ERROR: Please enter a valid number for the temperature.");
        continue;
    } else if (measurement === 'celsius') {
        console.log(`Your temperature in Kelvin is ${temperature + 273} K.`);
    } else if (measurement === 'kelvin') {
        console.log(`Your temperature in Celsius is ${temperature - 273} °C.`);
    }

    const restart = prompt('Would you like to convert another temperature (yes or no)? ').trim().toLowerCase();
    if (restart !== 'yes') {
        console.log("Thank you for using this temperature converter. Goodbye!");
        break;
    }
}



// git init
// git add .6
// git commit -m 'just a test'
// git push