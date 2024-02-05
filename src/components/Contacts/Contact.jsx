import './Contact.css';
import { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';

const Contact = () => {
  const [message, setMessage] = useState(false);
 
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h5>
        I do receive your messages and will respond asap if the valid email is
        provided 
      </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>asif263848@gmail.com</h5>
            <a href="mailto:asif263848@gmail.com">Send a message</a>
          </article>
        </div>
        <form onSubmit={()}>
          <input
            type="text"
            placeholder="Your Full Name"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Your Email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Your message"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;