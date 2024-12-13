const prompt = require('prompt-sync')();

console.log("Welcome to the Temperature Converter!");

while (true) {
    const measurement = prompt('Enter the measurement system (Celsius or Kelvin): ').trim();

    const temperature = parseFloat(prompt(`Enter the temperature in ${measurement}: `));

    if (isNaN(temperature)) {
        console.log("ERROR: Please enter a valid number for the temperature.");
    } else if (measurement === 'Celsius') {
        console.log(`Temperature in Kelvin: ${temperature + 273}°K`);
    } else if (measurement === 'Kelvin') {
        console.log(`Temperature in Celsius: ${temperature - 273}°C`);
    } else {
        console.log("ERROR: Please enter either 'Celsius' or 'Kelvin' as the measurement system.");
        continue;
    }

    const restart = prompt("Convert another temperature? (yes or no): ").trim().toLowerCase();
    if (restart !== 'yes') {
        console.log("Thank you for using the Temperature Converter. Goodbye!");
        break;
    }
}
