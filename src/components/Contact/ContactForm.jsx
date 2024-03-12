import React from 'react';
import { useState } from "react";
import './contact.css'


const ContactForm = () => {
  // State to manage form input values
  const [formInput, setformInput] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformInput((prevData) => ({ ...prevData, [name]: value }));
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

  return (
    <div>
        <form
          name="contact"
          method="post" 
          action="/contact"
          data-netlify="true"
        >
          <input type="hidden" name="form-name" value="contact"/>
          <label>
            <input className='infoArea'
              required
              type='text'
              name='name'
              value={formInput.name}
              onChange={handleChange}
              placeholder="Enter your name"
              onBlur={handleBlurName}
            />
            <h4 id='warningTextNameID' className='warningTextForm hidden-element'>*Please insert a Name</h4>
          </label>

          <label>
            <input className='infoArea'
              required
              type='email'
              name='email'
              value={formInput.email}
              onChange={handleChange}
              placeholder="Enter your email"
              onBlur={handleBlurEmail}
            />
              <h4 id='warningTextemailID' className='warningTextForm hidden-element'>*Please insert a email</h4>
          </label>

          <label>
            <input className='infoArea'
              type='text'
              name='phone'
              value={formInput.phone}
              onChange={handleChange}
              placeholder="Phone Number (Optional)"
            />
          </label>

          <label>
            <textarea className='textArea'
              name='message'
              value={formInput.message}
              onChange={handleChange}
              placeholder="Enter additional details"
            />
          </label>
          <button className='emailMeButton' type='submit'>Submit</button>
        </form>
        </div>
  );
};

export default ContactForm;
