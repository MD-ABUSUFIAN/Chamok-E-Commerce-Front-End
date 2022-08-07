
import './App.css';
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Footer from './Pages/Footer/Footer';
import { Routes, Route, Link, BrowserRouter } from "react-router-dom";
import Navbar from './Pages/Navigatin/Navbar';
import Banner from './Pages/Banner/Banner';
import OfferBanner from './Pages/OfferBanner/OfferBanner';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Banner/>
      <OfferBanner/>
    {/* <Header/> */}
    {/* <Navbar/> */}
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    
    </div>
  );
}

export default App;
