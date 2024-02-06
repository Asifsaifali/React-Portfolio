import Resume from "./Resume";
import Socials from "./SocialMedia";
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3>Hello I am</h3>
        <h1>Asif Hussain</h1>
        <h5>Web Developer</h5>
        <Resume />
        <Socials />
      </div>
    </header>
  );
};

export default Header;
