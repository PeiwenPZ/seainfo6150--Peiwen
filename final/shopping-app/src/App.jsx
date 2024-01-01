import { useState } from 'react';
import React from 'react';
import './App.css';
import Navbar from './Components/Navbar.jsx';
import Home from './Pages/Home.jsx';
import Checkout from './Pages/Checkout';
import Sale from './Pages/Sale';
import Cart from './Pages/Cart';
import Footer from './Pages/Footer';

function App() {

  //handle page change 
  const [currentPage, setCurrentPage] = useState('home');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  //record shopping cart state 
  const [cartItems, setCartItems] = useState([]);
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };



  const SkipLink = () => {
    return (
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
    );
  };

  

  return (
    <>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      <SkipLink />

      <div id="main-content">
        {currentPage === 'home' && <Home addToCart = {addToCart}/>}
        {currentPage === 'checkout' && <Checkout />}
        {currentPage === 'sale' && <Sale />}
        {currentPage === 'cart' && cartItems && <Cart cartItems={cartItems} />}
       
      </div>

      <Footer handlePageChange={handlePageChange}/>
    </>
  );
}

export default App;
