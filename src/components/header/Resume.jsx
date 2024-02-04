
import CV from '../../assets/Asif Hussain Resume.pdf';

const Resume = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
};

export default Resume;