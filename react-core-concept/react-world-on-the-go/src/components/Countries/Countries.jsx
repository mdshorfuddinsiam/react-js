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

import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countriesPromise}) => {
    // console.log(countriesPromise);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);

    const countries = use(countriesPromise);
    // console.log(countries);

    const handleVisitedCountries = (country) => {
        // console.log('Visited Countries Count!!');
        // console.log(country);

        // visitedCountries.push(country);      // not working in (react)
        // console.log(visitedCountries);

        const totalVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(totalVisitedCountries);
    } 

    const handleVisitedFlags = (flag) => {
        // console.log('Handle Flags...');
        // console.log(flag);

        const totalVisitedFlags = [...visitedFlags, flag];
        // console.log(totalVisitedFlags);
        setVisitedFlags(totalVisitedFlags);
    }

    return (
        <div>
            <h1>Travelling Countries: {countries.length}</h1>
            <h2>Travelling So Far: {visitedCountries.length}</h2>
            <div className="visited-flag-container">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>
            <ol>
                {
                    visitedCountries.map(country => <li>{country.name.common}</li>)
                }
            </ol>
            <br></br>
            <div className="countries">
                {
                    countries.map(country => 
                    <Country 
                        key={country.ccn3} 
                        country={country}
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;