import React from 'react';
import './topper.css';

const name= [
    "ASTON",
    "ANDERSSON",
    "DAHLLOF",
    "WEB DEV"
]

const nameClass = [
    "firstName",
    "middleName",
    "lastName",
    "profession"
]

export default function Topper(){
    return (
      <div className='Topper'>
        <div className="topper-lines" />
        <div className="topper-names">
          {name.map((n, index) => (
            <h2 key={index} className={nameClass[index]}>
              {n}
            </h2>
          ))}
        </div>
      </div>
    );
}