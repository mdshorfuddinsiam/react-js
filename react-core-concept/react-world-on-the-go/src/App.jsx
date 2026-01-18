import { Suspense } from 'react';
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromise = fetch('https://restcountries.com/v3.1/all?fields=name,capital,region,flags,population,cca2,ccn3,cca3,independent').then(res => res.json());
// console.log(countriesPromise);


function App() {

  return (
    <>
      <Suspense fallback={<h3>All Countries Loading...</h3>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  )
}

export default App
