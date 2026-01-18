import React, { useState } from 'react';
import './Country.css';

const Country = ({country}) => {
    // console.log(country.flags);
    // console.log(country.fla);

    const [visited, setVisited] = useState(false);

    const handleVisited = () => {
        // console.log('Visited Clicked!')
        // setVisited(true);

        // if(visited === true){
        //     setVisited(false);
        // }else{
        //     setVisited(true);
        // }

        setVisited(!visited);
    }

    return (
        // <div className="country">
        <div className={`country ${visited && 'country-visited'}`}>
            <h3>Name: {country.name.common}</h3>
            {/* <img src={country.flags.pn}></img> */}  {/* --- Wrong property (No Error) --- */}
            {/* <img src={country.fla?.pn}></img> */}   {/* --- Wrong property (But Working) --- */}
            {/* <img src={country?.fla?.pn}></img> */}  {/* --- Wrong property (But Working) --- */}
            {/* <img src={countryy?.flags?.png}></img> */}  {/* --- Wrong object (Not Working) --- */}
            <img src={country.flags.png}></img>
            <p>Independent: {country.independent ? 'Free' : 'Not Free'}</p>
            <p>Population: {country.population}</p>
            <button className={visited ? 'btn-visited' : 'btn-not-visited'} onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited'}</button>
            <br></br>
        </div>
    );
};

export default Country;