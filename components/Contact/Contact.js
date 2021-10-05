import React, { useState } from 'react';

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    number: '',
    message: '',
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // e.target.reset()
  };



  return (
    <div className="contact">
      <div className="contact_head">
        <h2>LET'S GET TO WORK.</h2>
        <p>Call Now to discuss your project:  +1 (480) 409-4019</p>
      </div>
      <div className="contact_form">
        <div className="contact_body">
          <form onSubmit={ handleSubmit }>
            <input
              type="text"
              className="field"
              name="name"
              placeholder="Your Name"
            />
            <input
              type="email"
              className="field"
              name="email"
              placeholder="Your Email"
            />
            <input
              type="number"
              className="field"
              name="number"
              placeholder="Your Phone"
            />
            <textarea
              className="field field_area"
              placeholder="Message"
              name="message"
            />
            <button className="field_btn">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;