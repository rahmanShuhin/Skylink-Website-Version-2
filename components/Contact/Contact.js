import React, { useState } from "react";

const Contact = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    // e.target.reset()
  };

  return (
    <div className="contact" id="contact">
      <div className="contact_head">
        <h2>LET'S GET TO WORK.</h2>
        <p>Email us to discuss your project : contact@skylinkcreative.com</p>
      </div>

      <div className="contact_form">
        <div className="contact_body">
          <form
            action="https://formsubmit.co/contact@skylinkcreative.com"
            method="POST"
          >
            <input
              type="text"
              className="field"
              name="name"
              placeholder="Your Name"
            />
            <input
              type="hidden"
              name="_next"
              value="https://www.skylinkcreative.com/"
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
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks For Showing Interest On Us. We will Contact to you soon"
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
