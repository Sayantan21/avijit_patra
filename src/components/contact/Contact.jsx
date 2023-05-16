import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MdOutlineEmail } from 'react-icons/md';
import './contact.css';

const Contact = () => {
  const [message2, setMessage] = useState(false);
  const formRef = useRef();

  const [user_name, setuser_name] = useState("")
  const [user_email, setemail] = useState('')
  const [message, settextmessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs.sendForm('service_v6277kq', 'template_thlshls', formRef.current, 'fDXL5IBcMHI8TCb1v')
      // .send("service_v6277kq", "template_thlshls", 'fDXL5IBcMHI8TCb1v', {
      //   from_name: user_name,
      //   message: textmessage,
      //   email:email
      // })   
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided :)
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
      <div className="contact__options">
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Address</h4>
              <p>Burdwan 713102, West Bengal</p>
            </article>
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Email</h4>
              <h5>avijitpatra419@gmail.com</h5>
              <a href="mailto:avijitpatra419@gmail.com">Send a message</a>
            </article>
            <article className="contact__option">
              <MdOutlineEmail className="contact__option-icon" />
              <h4>Number</h4>
              <h5>+91 9382742989</h5>
            </article>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Full Name"
              name="user_name"
              onChange={(e) => setuser_name(e.target.value)}
              value={user_name}
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              onChange={(e) => setemail(e.target.value)}
              value={user_email}
              required
            />
            <textarea
              placeholder="Your message"
              rows="7"
              name="message"
              onChange={(e) => settextmessage(e.target.value)}
              value={message}
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {message2 && <span>Thanks, I'll reply ASAP :)</span>}
          </form>
      </div>
    </section>
  );
};

export default Contact;
