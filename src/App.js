import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import OverView from './Components/overview/overview';
import About from './Components/About/About';

function App() {
  return (
    <div>
       <Navbar />
       <Header />
  <OverView />
  <About />
    </div>
  );
}

export default App;
