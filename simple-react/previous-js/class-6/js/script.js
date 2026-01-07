// ============== Truthy & Falsy =============
// Falsy : 0, -0, false, null, undefined
// True : 'abc', 1, true, {}, []

// const test = "";
// const test = {};
// const test = undefined;
// const test = null;
const test = 1;

// if(test){
//     console.log('Truthy');
// }else{
//     console.log('Falsy');
// }
// test ? console.log('Truthy') : console.log('Falsy');

// const num = 30;
const num = 50;
const result = (num >= 20 && num <= 40) ? 'True' : 'False';
console.log(result);

// const isActive = true;
const isActive = false;

const showUser = () => console.log('Show User');

const hideUser = () => console.log('Hide User');

isActive ? showUser() : hideUser();
console.log('--------------');

isActive && showUser();
console.log('--------------');

isActive || hideUser();
console.log('--------------');


const digit = "10";
console.log(typeof digit);
const new_digit = +digit;
console.log(new_digit);
console.log(typeof new_digit);
const sum = digit + '';
console.log(sum);
console.log(typeof sum);






