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

const Countries = ({countriesPromise}) => {
    // console.log(countriesPromise);

    const countries = use(countriesPromise);
    // console.log(countries);

    return (
        <div>
            <h1>Travelling Countries</h1>
            {
                countries.map(country => <Country country={country}></Country>)
            }
        </div>
    );
};

export default Countries;