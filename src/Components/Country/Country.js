import React from 'react';
import './Country.css'

const Country = (props) => {
    return (
        <div className='country bg-success'>
            <h2>Country Name   : {props.country.name.common} </h2>
            <img src={props.country.flags.png} alt="" />
            <h4>Population : {props.country.population}</h4>
            <h4>Area : {props.country.area}</h4>
            <h4>Region : {props.country.region}</h4>
        </div>
    );
};

export default Country; 