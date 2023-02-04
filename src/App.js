import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import {overView} from './Components/overview/overview';


function App() {
  return (
    <div>
       <Navbar />
       <Header />
    <overView />
    </div>
  );
}

export default App;
