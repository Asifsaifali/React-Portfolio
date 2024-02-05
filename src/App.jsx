import Introduction from "./components/About/Introduction";
import Contact from "./components/Contacts/Contact";
import Skills from "./components/Skills/Skills";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header />
      <Introduction />
      <Skills />
      <Contact/>
      <Footer />
    </>
  );
}

export default App;
