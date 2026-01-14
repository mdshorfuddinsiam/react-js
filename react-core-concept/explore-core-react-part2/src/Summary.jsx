/**
 * Component
 * JSX
 * Props
 * State 
 * Events
 * [ Contional Rendering ]
 * 
 * API: url: https://jsonplaceholder.typicode.com/users
 * 
 */

/**
 * 1. just write a simple fetch with json conversion
 * 2. wrap the data loading under sunspense
 */

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(res => res.json())
//       .then(data => console.log(data))

// const loadData = async() => {
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = res.json();
//     return data;
// }