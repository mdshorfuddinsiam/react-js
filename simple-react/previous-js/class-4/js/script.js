// ============== Array and object Destructuring =============
const friends = ['A', 'B', 'C'];
// const element1 = friends[0];
// const element2 = friends[1];
// const element3 = friends[2];
// const [element1, element2, element3] = friends;
const [element1, element2] = friends;
// console.log(element1, element2, element3);
console.log(element1, element2);
console.log('---------------');

const person = {
    name: 'Pushpa',
    age: 19,
    skills: ['Html', 'Css', 'JS'],
    country: 'BD'
}

// const {gender} = person;
// console.log(gender);

// const {name, age, skills} = person;
// console.log(name, age, skills);

const {name, age, skills, country} = person;
console.log(name, age, skills, country);



