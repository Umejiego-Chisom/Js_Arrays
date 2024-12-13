
const prompt = require('prompt-sync')();

console.log("Welcome to the Weight Converter!");

let weightInGrams = parseFloat(prompt("Please enter your weight in grams: "));

let weightInKg = weightInGrams / 1000;

console.log(`Your weight is ${weightInKg} kilograms.`);
