
import Resume from './Resume';
import HeaderSocials from './SocialMedia';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I am</h5>
        <h1>Asif Hussain</h1>
        <h5 className="text-light">Front-end Developer</h5>
        <Resume />
        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;