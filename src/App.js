import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import OverView from './Components/overview/overview';
import About from './Components/About/About';
import ConvertAirTime from './Components/services/Services';
import { PayBill } from './Components/services/Services';
import { BuyData } from './Components/services/Services';
import { BuyAirtime } from './Components/services/Services';
import { FAQs } from './Components/FAQ/FAQs';
import { Whychoose } from './Components/WhyChooseUs/ChooseUs';
import { Login } from './Components/Register/Login';
import { Reviewers } from './Components/Review/Reviewer';
import { Register } from './Components/Register/Register';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { Footer } from './Components/Footer/Footer';
function App() {
  return (
    <BrowserRouter>
       <Navbar />
       <Routes>
      <Route path='/' element={<Header />} />
      <Route path='/review' element={<Reviewers />} />
      <Route path='/about' element={<About />} />
      <Route path='/faq' element={<FAQs />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/convert' element={<ConvertAirTime />} />
      <Route path='/airtime' element={<BuyAirtime />} />
      <Route path='/data' element={<BuyData/>} />
      <Route path='/bill' element={<PayBill />} />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
