import React from 'react';
import './topper.css';

const name= [
    "Aston",
    "Andersson",
    "Dahllof",
    "Web Dev"
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
            {name.map((n, index) => (
              <h2 key={index} className={nameClass[index]}>
                {n}
              </h2>
            ))}
        <p className="profession">Web Dev</p>
      </div>
    );
  }