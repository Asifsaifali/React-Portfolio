import { BsFillPatchCheckFill } from "react-icons/bs";
import "./Skills.css";

const Skills = () => {
  const style = {
    color: "black",
  };
  return (
    <section id="skills">
      <h5 style={style}>The Skills I Have</h5>
      <h2 style={style}>Skills</h2>
      <div className="container experience__container">
        <div className="experience__developer">
          <h3 style={style}>Web Developer</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>CSS</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>React Js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Node Js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Express Js</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Mongo DB</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MYSQL</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
