import { useState } from 'react';
import'./Country.css';
import './countrise.css'

const Country=({country,handleVisitedCountry})=>{

    const  {name,flags,cca3,population,area}=country;

const [visited,setVisited]=useState(false)

const handleVisited=()=>{
    setVisited(!visited)
}

const passwithparames=()=>{
    handleVisitedCountry(country)
}

console.log(handleVisitedCountry)

    return(
        <div className={`country ${visited && 'visited'}`}>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />

            <p><small>Code:{cca3}</small></p>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <button onClick={ passwithparames}>mard visited</button>
            <br />

            <button onClick={handleVisited}> {visited ? 'i have Visited': 'Going'}</button>
           
        </div>
    )
}
export default Country;