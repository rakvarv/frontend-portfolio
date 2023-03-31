import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const { REACT_APP_PUBLIC_KEY, REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID } = process.env;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, form.current, REACT_APP_PUBLIC_KEY)
      .then((result) => {
        console.log(result.text);
        console.log("Message sent...");
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="user_name">Name</label>
        <input type="text" id="user_name" name="user_name" required />
        <label htmlFor="user_email">Email</label>
        <input type="email" id="user_email" name="user_email" required />
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactUs;