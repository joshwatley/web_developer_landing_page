import Hero from './components/Hero/Hero.js';
import MidFooter from './components/MidFooter/MidFooter.js';
import './App.css';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div style={{height: '100vh'}}>
    <Hero />
    <MidFooter />
    <Footer />
    </div>
  );
}

export default App;
