
import { useEffect, useState } from "react";
import Country from "./Country";
import './countrise.css'


const Countries =()=>{

    const [countries, setQuote] = useState([]);

const[ visitedCountrise,setVisitedcountrise]=useState([])

useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then(data=>setQuote(data))
},[])

 const handleVisitedCountry=country=>{
const newvisitedCountry=[...visitedCountrise,country];
setVisitedcountrise(newvisitedCountry)

    console.log(country)
 }


    return(
        <div>

            <h2>Conttainetr:{countries.length} </h2>
            <h1>visitedcountry: {visitedCountrise.length}</h1>
            {

                visitedCountrise.map(country=><li key={country.cca3}>{country.name.common}</li>)
            }

<div>


    <h3>Visited Cuntruy</h3>
    <ul>


    </ul>
</div>
            
<div className="countrise-countaner">

    
{
    
    countries.map(country=> <Country key={country.cca3} handleVisitedCountry={handleVisitedCountry} country={country}></Country>)

 
}
</div>

        </div>
    )
}
export default Countries;