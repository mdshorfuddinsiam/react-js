import { Suspense } from 'react';
import './App.css'
import Bottles from './components/Bottles/Bottles';

// const bottlesPromise = fetch('bottles.json').then(res => res.json());
// console.log(bottlesPromise);
// const bottlesPromiseGithub = fetch('https://raw.githubusercontent.com/mdshorfuddinsiam/bottle-data/refs/heads/main/bottles.json').then(res => res.json());
// console.log(bottlesPromiseGithub);

const bottlesPromise = fetch('./bottles.json').then(res => res.json());

// ------ Local Storage -----
// const person = {name: 'Pushpita', relation: 'Love'}

// // localStorage.setItem('person', person);
// const stringifiedData = JSON.stringify(person);
// localStorage.setItem('person', stringifiedData);
// // localStorage.setItem('person', JSON.stringify(person));

// const getData = localStorage.getItem('person');
// console.log(getData);
// const getParseData = JSON.parse(getData);
// console.log(getParseData);

// localStorage.removeItem('person');
// // console.log(localStorage.getItem('person'));
// const getNullData = localStorage.getItem('person');
// console.log('Removed cart (get):', getNullData);
// const parseNullData = JSON.parse(getNullData);
// console.log('Removed cart (parse):', parseNullData);
// --------------------------

function App() {

  // const bottle = [
  //   {id: 1, name: 'Bottle 1', price: 300, color: 'black'},
  //   {id: 2, name: 'Bottle 2', price: 400, color: 'white'},
  //   {id: 3, name: 'Bottle 3', price: 500, color: 'yellow'},
  //   {id: 4, name: 'Bottle 4', price: 600, color: 'pink'},
  // ]

  return (
    <>
      <h1>Buy Awesome Water Bottle</h1>
      <Suspense fallback={<h3>Bottles data loading...</h3>}>
        <Bottles bottlesPromise={bottlesPromise}></Bottles>
      </Suspense>
    </>
  )
}

export default App
