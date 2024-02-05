import Introduction from "./components/About/Introduction";
import Contact from "./components/Contacts/Contact";
import Navbar from "./components/Navbar/Navbar";
import Project from "./components/Projects/Project";
import Skills from "./components/Skills/Skills";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Introduction />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
