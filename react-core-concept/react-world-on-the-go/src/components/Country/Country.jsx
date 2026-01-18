import React from 'react';

const Country = ({country}) => {
    // console.log(country.flags);
    // console.log(country.fla);

    return (
        <div>
            <h3>Name: {country.name.common}</h3>
            {/* <img src={country.flags.pn}></img> */}  {/* --- Wrong property (No Error) --- */}
            {/* <img src={country.fla?.pn}></img> */}   {/* --- Wrong property (But Working) --- */}
            {/* <img src={country?.fla?.pn}></img> */}  {/* --- Wrong property (But Working) --- */}
            {/* <img src={countryy?.flags?.png}></img> */}  {/* --- Wrong object (Not Working) --- */}
            <img src={country.flags.png}></img>
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population: {country.population}</p>
            <br></br>
        </div>
    );
};

export default Country;