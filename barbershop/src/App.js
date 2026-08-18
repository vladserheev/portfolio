import './App.css';
import Header from './components/Header';
import Presentation from "./components/Presentation"
import Info from "./components/Info"
import ProvideSection from './components/ProvideSection';
import Booking from './components/Booking';
import Portfolio from './components/Portfolio';
import Contact from "./components/Contact";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Presentation></Presentation>
      <Info></Info>
      <ProvideSection />
      <Booking/>
      <Portfolio></Portfolio>
      <Contact/>
      <Footer></Footer>
    </div>
  );
}

export default App;
