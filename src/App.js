import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import OverView from './Components/overview/overview';
import About from './Components/About/About';
import ConvertAirTime from './Components/services/Services';
import { PayBill } from './Components/services/Services';
import { BuyData } from './Components/services/Services';
import { BuyAirtime } from './Components/services/Services';


function App() {
  return (
    <div>
       <Navbar />
       <Header />
  <OverView />
  <About />
   <ConvertAirTime />
   <PayBill />
   <BuyData />
   <BuyAirtime />
    </div>
  );
}

export default App;
