// ============== Map, Filter, Find, Foreach =============
const products = [
    {name:"Galaxy", brand:"Samsung", price:5000, color:"Blue"},
    {name:"Redmi", brand:"Xiaomi", price:3000, color:"Black"},
    {name:"Apple", brand:"Apple", price:5000, color:"White"},
    {name:"Apple2", brand:"Apple", price:5000, color:"Gold"},
    {name:"Redmi2", brand:"Xiaomi", price:2000, color:"Gold"}
];

// ----- Map : (new array create kore return kore) -------
// const result = products.map(function(product){
//     return product.color;
// });

// const result = products.map(product => product.name);

// const result = products.map(product => {
//     console.log(product);
// });
// console.log(result);

const result = products.map(product => {
    return product.price
});
console.log(result);
console.log('---------------');
// -------------------------------------------------------

// ----- forEach : (kono kisu return kore nah) -------
// products.forEach(function(product){
//     console.log(product);
// });
// products.forEach(product => console.log(product.brand));
products.forEach(product => {
    console.log(product.color);
});
// -------------------------------------------------------

// ----- Filter : (condition akare records gulo notun array te niye ashe) -------
// const filterProducts = products.filter(function(product){
//     return product.color === "Gold";
// });
// const filterProducts = products.filter(product => product.price >= 5000);
const filterProducts = products.filter(product => {
    return product.brand === "Xiaomi";
});
console.log(filterProducts);
console.log('---------------');
// -------------------------------------------------------

// ----- Find : (matched first singel object return kore) -------
// const findProduct = products.find(product => product.name === "Galaxy");
// const findProduct = products.find(product => product.name === "Galaxyyy");      // unmatched = undefined
const findProduct = products.find(function(product){
    return product.price === 5000;
})
console.log(findProduct);
console.log('---------------');
// -------------------------------------------------------