import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Service from './Components/Service/Service';
import Skills from './Components/Skills/Skills';
import Welcome from './Components/Welcome/Welcome';
function App() {
  return (
    <>
      <Header/>
      <Welcome/>
      <About/>
      <Skills/>
      <Service/>
      <Footer/>
    </>
  );
}

export default App;
