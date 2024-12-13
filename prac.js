const PromptSync = require("prompt-sync");

console.log("Welcome to your temperature converter!");
while (true) {
const measurement = prompt(`Enter the measuremeny system (Celsius or Kelvin): `).trim();

const temperature = parseFloat(prompt(` Enter the temperature ${measurement}: `));


if (isNaN(temperature)) {
    console.log("ERROR :Please enter a valid number for the temperature. ");
} else if(measurement === 'Celsius') {
    console.log(`Temperature in Kelvin: ${temperature + 273}°K`);
}
 else if(measurement === 'Kelvin') {
    console.log(`Temperature in Celsius: ${temperature - 273}°C`);
} else {
console.log("ERROR: Please enter 'Celsius' or 'Kelvin' as the measurement.");
continue;
}

const restart = prompt("Convert to another temperature? ( yes / no): ").trim().toLowerCase();
if (restart !== 'yes') {
    console.log("Thank you for using the Temperature Converter. Goodbye!");
    break;
}
}