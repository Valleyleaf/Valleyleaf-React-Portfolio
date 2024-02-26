import React from 'react';
import { useState } from "react";
import './contact.css'

const Contact = () => {
  // State to manage form input values
  const [formInput, setformInput] = useState({
    name: '',
    email: '',
    message: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformInput((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleBlurName = () => {
    var inputElement = document.getElementById("warningTextNameID");
    if (formInput.name.trim() === '') {
      inputElement.classList.remove("hidden-element");
    } else {
      inputElement.classList.add("hidden-element");
    }
  };

  const handleBlurEmail = () => {
    var inputElement = document.getElementById("warningTextemailID");
    if (formInput.email.trim() === '') {
      inputElement.classList.remove("hidden-element");
    } else {
      inputElement.classList.add("hidden-element");
    }
  };

//Note to self: onBlur does not work with chrome autofill feature. Fix in the future. Could break down function to smaller pieces and make them trigger off each other?

  //Learning note for the future. Be mindful of the features you wish to implement.
  //I didn't include the if empty = give warning function and now I am struggling to add it.
  return (
    <div>
      <div className='flex-container-columns center-content fade-in'>
        <div className='flex-container-columns center-content '>
        <h2>Contact Me</h2>
        <p>If you are interested in my work, please feel free <br />
          to contact me using the form below.
        </p>
        </div>
          <p></p>
      </div>
    </div>
  );
};

export default Contact;