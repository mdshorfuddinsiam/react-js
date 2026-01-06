// ------ variable (let & const) --------

// let = use for (reassign)
let name = 'Shorfuddin';
console.log(name);
name = 'Siam';
console.log(name);

// const = use for (fixed value)
const countryName = 'BD';
console.log(countryName);
// countryName = 'Bangladesh';  // error
// console.log(countryName);    // error
console.log('-----------------');


// ------ condition (if else) --------
// let num = 20;
let num = 40;

// if(num > 20){
// if(num >= 20){
// if(num >= 20 && num <= 30){
if(num >= 20 || num <= 30){
    console.log('True');
}else{
    console.log('False');
}
console.log('-----------------');

// ------ array --------
const letters = ['A', 'B', 'C', 'D'];
console.log(letters);
console.log(letters.length);
console.log(letters[1]);
// letters.push('X');       // add (last)
// letters.pop();           // remove (last)
// letters.unshift('X');    // add (first)
// letters.shift();         // remove (first)
// console.log(letters);

//--- (not affect) ---
// letters.slice(2,4);      
// console.log(letters);
// -------------------
// console.log(letters.slice(2,4));
console.log(letters.slice(2,3));
console.log(letters.splice(2,3));
console.log('-----------------');

// ------ loop (for) ------
const smallLetters = ['a', 'b', 'c', 'd'];
for(index = 0; index < smallLetters.length; index++){
    const result = smallLetters[index];
    console.log(result);
}
console.log('-----------------');

// ------ function (normal) ------
// --- (check) ---
// function sum(a, b){
//     console.log(a, b);
//     const add = a + b;
//     console.log(add);
// }
// sum();
// --------------

// function sum(a, b){
    //     const add = a + b;
    //     console.log(add);
    // }
    // sum(5, 10);
    
// --- (check) ---
// function sum(a, b){
//     const add = a + b;
//     console.log(add);
// }
// const output = sum(5, 10);
// console.log(output);
// --------------

function sum(a, b){
    console.log(arguments);
    console.log(...arguments);
    const add = a + b;
    return add;
}
const output = sum(5, 10);
console.log(output);
console.log(sum.length);
console.log('-----------------');

// ------ object ------
const friends = ['aa', 'bb', 'cc', 'dd'];

const person = {
    name: 'Siam',
    age: 27,
    friend: friends,
}
console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.friend);
console.log(person.friend[2]);
person.name = 'Pushpita';
console.log(person);