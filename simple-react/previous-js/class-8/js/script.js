// ============== dot vs bracket notation =============

const person = {
    name: 'Pushpita',
    age: 19,
    lover: ['Siam'],
    salary: 20000,
    10: 'numberrr',
    "text-property": 'demo text',
}

const name = person.name;
console.log(name);

// const num = person.10;   // (dot) notation diye eta console kora jabe nah
// console.log(num);

const num = person[10];
console.log(num);

// const text = person.text-property;      // (dot) notation diye eta console kora jabe nah
const text = person['text-property'];
console.log(text);

console.log('--------------');








