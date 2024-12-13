// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits); // Output: ["Apple", "Banana", "Cherry"]


// let numbers = new Array(10); // Creates an array with 10 empty slots
// console.log(numbers); // Output: [empty × 10]
// console.log(numbers.push("sdwd"))
// console.log(numbers);



// let colors = ["Red", "Green", "Blue"];
// console.log(colors[0]); // Output: "Red"
// console.log(colors[2]); // Output: "Blue"


// let arr = [1, 2, 3 , "sadas"];
// arr.push(4);

// console.log(arr); // Output: [1, 2, 3, 4]

// let obj = {}


// let arr = ["apple" , "banana" , "cherry" , "melon" , "pawpaw"]

// let arr2 = [1 , 2 , "4",  3 , 4 , 44 , 89]

// let arr3 = [1 , 2 , ["str" , true , [4 , null , ["str1"]]]]

// console.log(arr.at(3));

// console.log(arr.concat("pawpaw"));

// console.log(arr.copyWithin(3 , 2 , 4));


// console.log(arr.entries);

// const iterable = arr.entries()

// for (let i of iterable) {
//     console.log(i);
// }
// console.log(arr2.every((n) => n > 10));

// console.log(arr2.fill(8 , 2 , 5));

// console.log(arr2.filter((n) => n === 4));

// console.log(arr2.find((n) => n == 4));

// console.log(arr2.findIndex((n) => n === 1));

// console.log(arr3.flat(1));

// let fruits = ['apple', 'banana', 'orange', 'banana'];

// console.log(fruits.indexOf('banana')); // Output: 1

// console.log(fruits.indexOf('grape'));  // Output: -1

// let fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.join(', ')); // Output: "apple, banana, orange"

// let fruits = ['apple', 'banana', 'orange'];

// let keys = fruits.keys();
// for (let key of keys) {
//   console.log(key); // Output: 0, 1, 2
// }

// let fruits = ['apple', 'banana', 'orange'];

// let values = fruits.values();

// for (let value of values) {
//   console.log(value); // Output: apple, banana, orange
// }

// let fruits = ['banana', 'orange'];
// fruits.unshift('apple');

// console.log(fruits); // Output: ['apple', 'banana', 'orange']

// let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits.toString()); // Output: "apple,banana,orange"

// let dates = [new Date(), new Date(2024, 1, 1)];

// let arr4 = [ 12365545 , 6787989789]
// console.log(arr4.toLocaleString('en-US' , {style : "currency" , currency : "eur"})); // Output: Locale-specific date strings

// let fruits = ['apple', 'banana', 'orange'];
// fruits.splice(1, 1, 'grape'); // Remove 1 element at index 1, add 'grape'
// console.log(fruits); // Output: ['apple', 'grape', 'orange']

// let numbers = [6, 7, 8, 9, 22, 11];

// let alph = ["rasfse" , "asdfsdzfc" , "tsdvd" , "zvsdfvzd" , "ewrffsrg" , "aergdrfgcf"]

// numbers.sort();

// numbers.sort((a , z) => z - a);

// console.log(numbers); // Output: [1, 1, 3, 4, 5]

// let numbers = [1, ];

// let hasEven = numbers.some(num => num % 2 === 0);

// console.log(hasEven); // Output: true

// let fruits = ['apple', 'banana', 'orange'];

// console.log(fruits.slice(1, 2)); // Output: ['banana', 'orange']

// let fruits = ['apple', 'banana', 'orange'];

// let first = fruits.shift();

// console.log(first); // Output: 'apple'

// console.log(fruits); // Output: ['banana', 'orange']

// let fruits = ['apple', 'banana', 'orange'];

// fruits.reverse();6
// console.log(fruits); // Output: ['orange', 'banana', 'apple']

// let numbers = [1, 2, 3, 4];

// let result = numbers.reduceRight((acc, num) => acc - num);

// console.log(result); // Output: -2 (4 - 3 - 2 - 1)

// let numbers = [1, 2, 3, 4];

// let sum = numbers.reduce((acc, num) => acc + num, 0);

// console.log(sum); // Output: 10

// let fruits = ['apple', 'banana'];

// fruits.push('orange');

// console.log(fruits); // Output: ['apple', 'banana', 'orange']

// let fruits = ['apple', 'banana', 'orange'];

// let last = fruits.pop();
// console.log(last); // Output: 'orange'

// console.log(fruits); // Output: ['apple', 'banana']

// let numbers = [1, 2, 3, 4];

// let squared = numbers.map(num => num + 2);

// console.log(squared); // Output: [1, 4, 9, 16]

// let fruits = ['apple', 'banana', 'orange'];
// console.log(fruits.length); // Output: 3
// fruits.length = 2; // Trims the array
// console.log(fruits); // Output: ['apple', 'banana']

// console.log(fruits.includes("banana"));
// console.log(fruits.flatMap((n) => n.split("")));

// modulus
// mutable & non-mutable


function myFunc (a , b){
    return a + b
}

console.log(myFunc("4" , "5"));
