// ============== JSON =============

const person = {
    name: 'Pushpita',
    age: 19,
    friends: ['karima', 'mim', 'medha'],
    family: {
        father: 'anwar',
        mother: 'daliya'
    }
}

const jsonData = JSON.stringify(person);
console.log(jsonData);
const plainData = JSON.parse(jsonData);
console.log(plainData);
console.log('------------------');

// ============== Fetch =============
// fetch('url')
// .then(res => res.json())
// .then(data => console.log(data));

// ============== Keys & Values =============
// new (array) te return kore (key) / (value) gulo 

const love = {
    name: 'Pushpita',
    age: 19,
    friends: ['karima', 'mim', 'medha'],
    family: {
        father: 'anwar',
        mother: 'daliya'
    }
}

const keys = Object.keys(love);
console.log(keys);
const values = Object.values(love);
console.log(values);
console.log('------------------');

// ============== array add or remove (... spread operator) =============
const products = [
    {name:"Galaxy", brand:"Samsung", price:5000, color:"Blue"},
    {name:"Redmi", brand:"Xiaomi", price:3000, color:"Black"},
    {name:"Apple", brand:"Apple", price:5000, color:"White"},
    {name:"Apple2", brand:"Apple", price:5000, color:"Gold"},
    {name:"Redmi2", brand:"Xiaomi", price:2000, color:"Gold"}
];
// console.log(products);
// console.log(...products);

const newProduct = {
    name: 'Lumia',
    brand: 'Nokia',
    price: 4000,
    color: 'Gray'
}

// --- add product ---
const newArray = [...products, newProduct];
console.log(newArray);

// --- remove product ---
const remainingProducts = products.filter(product => product.brand !== 'Apple');
console.log(remainingProducts);

const newArray2 = [...remainingProducts, newProduct];
console.log(newArray2);
