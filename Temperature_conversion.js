
const prompt = require('prompt-sync')();

console.log("Welcome to the Temprature Converter!");

let measurement = prompt('What temperature mearsuremnt would you like to use ? ')

if (measurement === 'Celsius') {
    let temperature_in_celsius = parseFloat(prompt("Fill in your current temperature in celsius: "));
    let temperature_in_kelvin = temperature_in_celsius + 273
    console.log(`Your current temperature in kelvin is ${temperature_in_kelvin}°K`);
}
if (measurement === 'Kelvin') {
    let temperature_in_kelvin = parseFloat(prompt("Fill in your current temperature in Kelvin: "));
    let temperature_in_celsius = temperature_in_kelvin - 273
    console.log(`Your current temperature in kelvin is ${temperature_in_celsius}°C`);
}















// function calculate (a,b){}
// if(operation === '+273'){
//     return 360.6
// } else if (operation === '-273') {
// return -360.6
// }