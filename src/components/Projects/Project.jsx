import "./Project.css";
import AllProjects from './Data'


const Project = () => {

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>ProJects</h2>
      <div className="container portfolio__container">
        {AllProjects.map((value) => (
          <article className="portfolio__item" key={value.id}>
            <div className="portfolio__item-image">
              <img src={value.img} alt={value.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{value.title}</h3>
              <p>{value.description}</p>
              <p>{value.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={value.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
