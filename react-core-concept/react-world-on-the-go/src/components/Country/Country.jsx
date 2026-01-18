import React from 'react';
import './Country.css';

const Country = ({country}) => {
    // console.log(country.flags);
    // console.log(country.fla);

    const handleVisited = () => {
        console.log('Visited Clicked!')
    }

    return (
        <div className="country">
            <h3>Name: {country.name.common}</h3>
            {/* <img src={country.flags.pn}></img> */}  {/* --- Wrong property (No Error) --- */}
            {/* <img src={country.fla?.pn}></img> */}   {/* --- Wrong property (But Working) --- */}
            {/* <img src={country?.fla?.pn}></img> */}  {/* --- Wrong property (But Working) --- */}
            {/* <img src={countryy?.flags?.png}></img> */}  {/* --- Wrong object (Not Working) --- */}
            <img src={country.flags.png}></img>
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population: {country.population}</p>
            <button onClick={handleVisited}>Not Visited</button>
            <br></br>
        </div>
    );
};

export default Country;