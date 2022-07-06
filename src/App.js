import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Coins from './Components/Coins';
import Contact from './Components/Contact';
import CoinDetails from './Components/CoinDetails';

function App() {
  return (
    <div className="">
      <Navbar></Navbar>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='about' element={<About></About>}></Route>
      <Route path='coins' element={<Coins></Coins>}></Route>
      <Route path='/coins/:id' element={<CoinDetails></CoinDetails>}></Route>
      <Route path='contact' element={<Contact></Contact>}></Route>

     </Routes>
    </div>
  );
}

export default App;
