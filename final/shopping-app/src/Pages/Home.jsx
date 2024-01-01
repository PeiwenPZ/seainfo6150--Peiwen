import React from 'react';
import CardPanel from '../Components/CardPanel.jsx';

function Home({ addToCart }) {
  return (
    <div className="home" >
      <h2>Welcome to BookShop</h2>
      <h3>Featured Books</h3>
      <CardPanel addToCart={addToCart} />
    </div>
  );
}


export default Home;