import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './Components/Header/Header';
import ScrollToTop from './Components/ScrollToTop/ScrollToTop';
import Home from './Pages/Home/Home';
function App() {
  return (
    <>
      <Header/>
      <Home/>
      <ScrollToTop/>
    </>
  );
}

export default App;
