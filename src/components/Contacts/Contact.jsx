import "./Contact.css";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
  return (
    <section id="contact">
      <h5 style={{ color: "black" }}>Get In Touch</h5>
      <h5 style={{ color: "black" }}>
        I do receive your messages and will respond asap if the valid email is
        provided
      </h5>
      <h2 style={{ color: "black" }}>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>asif263848@gmail.com</h5>
            <a href="mailto:asif263848@gmail.com">Send a message</a>
          </article>
        </div>
        <form onSubmit={(e) => e.preventDefault()}>
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
          <span style={{ color: "black" }}> Thanks, I'll reply ASAP</span>
        </form>
      </div>
    </section>
  );
};

export default Contact;
