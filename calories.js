const prompt = require('prompt-sync')();
console.log("Welcome to your fitness journey");
let measurement = prompt('How much time would you like to use ? ')

if (measurement === '1-2hours') {
    let workout_in_hours = parseFloat(prompt("Fill in your current workout time in hours: "));
    let workout_in_minutes = workout_in_hours + 650
    console.log(`Your current workout time in hours is ${workout_in_hours} calories`);
}

if (measurement === '30-40minutes') {
    let workout_in_minutes = parseFloat(prompt("Fill in your current workout time in minutes: "));
    let workout_in_hours  = workout_in_minutes  + 273 
    console.log(`Your current calorie being burn out is ${workout_in_minutes} calories`);
}


