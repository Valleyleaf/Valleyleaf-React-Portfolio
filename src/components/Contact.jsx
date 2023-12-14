import React from 'react';
import { useState } from "react";

// export default function Contact(){
//     return (
//       <div>
//         <div className='flex-container center-content'>
//           <form action="input"></form>
//           <p>Contact</p>
//         </div>
//       </div>
//     );
//   }

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

  return (
    <div>
      <div className='flex-container center-content flex-container-columns'>
        <form onSubmit={handleSubmit}>
          <label>
            Name: 
            <input
              type='text'
              name='name'
              value={formInput.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email: 
            <input
              type='email'
              name='email'
              value={formInput.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Message: 
            <textarea
              name='message'
              value={formInput.message}
              onChange={handleChange}
            />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;