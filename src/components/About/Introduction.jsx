import "./Introduction.css";

import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import img from "../../assets/boy.png";

const Introduction = () => {
  return (
    <section id="about">
      <h5 style={{ color: "black" }}>Get to know</h5>
      <h2 style={{ color: "black" }}>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="boy" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5 style={{ color: "white" }}>Experience</h5>
              <small style={{ color: "white" }}>1+ year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5 style={{ color: "white" }}>Projects</h5>
              <small style={{ color: "white" }}>10+ Completed Projects</small>
            </article>
          </div>
          <p style={{ color: "black" }}>
            I am a front-end developer🙂. I love to create simple and beautiful
            websites with great user experience.Some of the languages which I
            used as a front-end developer are HTML CSS JAVASCRIPT REACT JS
            jQuery. Also a backend developer 😎 which build and maintain the
            mechanisms that process data and perform actions on
            websites.Back-end languages I used are Nodejs MongoDB SQL
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
