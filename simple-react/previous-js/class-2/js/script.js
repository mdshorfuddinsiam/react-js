// ============== template string =============
const fName = 'Shorfuddin ';
const lName = 'Siam';
console.log(fName + lName);
console.log(`I am ${fName} ${lName}`);
console.log('-----------------');

// ============== arrow function =============
// arrow function er moddhe theke (arguments) check kora jay nah

// --- (check) ---
// console.log(sum());
// function sum(a, b){
//     console.log(arguments);
//     console.log(...arguments);
//     const add = a + b;
//     return add;
// }
// const output = sum(5, 10);
// console.log(output);
// console.log(sum.length);
// ---------------

// --- same ---
// function sum(a, b){
//     return a + b;
// }
// const sum = (a, b) => a + b;
// const sum = (a, b) => {
//     return a + b;
// }
// const result = sum(10, 20);
// console.log(result);
// ------------

// --- array convert ---
const sum = (...arr) => {
    console.log(arr);
}
sum(1, 2, 3)
// ---------------------
console.log('-----------------');

// ============== spread operator =============
// (array er moddhe theke element gulo ber kore niye ashe)

const numbers = [1, 2, 3, 4, 5];
console.log(numbers)
console.log(...numbers)

// uses (new array with extra new value)

const number = [10, 20, 30, 40, 50];
const newNumbers = [number, 100, 500];
console.log(newNumbers);
const newNumber = [...number, 100, 500];
console.log(newNumber);


