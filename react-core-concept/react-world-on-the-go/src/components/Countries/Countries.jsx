// function Countries(){
//     return (
//         <div>

//         </div>
//     )
// }
// ------------
// const Countries = () => {
//     return (
//         <div>

//         </div>
//     )
// }

import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    // console.log(countriesPromise);

    const countries = use(countriesPromise);
    // console.log(countries);

    return (
        <div>
            <h1>Travelling Countries: {countries.length}</h1>
            <br></br>
            <div className="countries">
                {
                    countries.map(country => <Country key={country.ccn3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;