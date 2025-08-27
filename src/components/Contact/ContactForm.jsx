import React, { useState } from 'react';
import './contact.css';



const ContactForm = () => {
  const [formInput, setFormInput] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return value.trim() === '' ? 'Please insert a Name' : '';
      case 'email':
        if (value.trim() === '') return 'Please insert an email';
        // Simple email regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email' : '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    setFormErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    setFormErrors((prev) => ({ ...prev, [name]: error }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {
      name: validateField('name', formInput.name),
      email: validateField('email', formInput.email),
    };
    setFormErrors(errors);
    if (!errors.name && !errors.email) {
      setSubmitted(true);
      // add Netlify form submission logic here when I feel like it.
    } else {
      setSubmitted(false);
    }
  };


  return (
    <div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
        data-netlify-honeypot="bot-field"
        noValidate
      >
        <input type="hidden" name="form-name" value="contact" />
        <div hidden>
          <input name="bot-field" />
        </div>

        <label htmlFor="name">
          <input
            className='infoArea'
            type='text'
            id='name'
            name='name'
            value={formInput.name}
            onChange={handleChange}
            placeholder="Enter your name"
            onBlur={handleBlur}
            aria-describedby="name-error"
            required
          />
        </label>
        {formErrors.name && (
          <h4 id="name-error" className='warningTextForm'>*{formErrors.name}</h4>
        )}

        <label htmlFor="email">
          <input
            className='infoArea'
            type='email'
            id='email'
            name='email'
            value={formInput.email}
            onChange={handleChange}
            placeholder="Enter your email"
            onBlur={handleBlur}
            aria-describedby="email-error"
            required
          />
        </label>
        {formErrors.email && (
          <h4 id="email-error" className='warningTextForm'>*{formErrors.email}</h4>
        )}

        <label htmlFor="phone">
          <input
            className='infoArea'
            type='tel'
            id='phone'
            name='phone'
            value={formInput.phone}
            onChange={handleChange}
            placeholder="Phone Number (Optional)"
          />
        </label>

        <label htmlFor="message">
          <textarea
            className='textArea'
            id='message'
            name='message'
            value={formInput.message}
            onChange={handleChange}
            placeholder="Enter additional details"
          />
        </label>

        <button className='emailMeButton' type='submit'>Submit</button>
        {submitted && (
          <div className="success-message">Thank you for your message!</div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;