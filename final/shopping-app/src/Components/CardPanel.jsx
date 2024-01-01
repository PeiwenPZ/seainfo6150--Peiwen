// src/components/CardPanel.js
import { useState } from 'react';
import React from 'react';
import './CardPanel.css';


function CardPanel({ addToCart }) {
    // book data from the server!
    const initialBooks = [
        { id: 1, title: 'The Psychology of Money', category: 'Non-Fiction', price: '$19.99', imageUrl: './images/photo2.avif' },
        { id: 2, title: 'How Innovation Works', category: 'Non-Fiction', price: '$24.99', imageUrl: "./images/photo1.jpeg" },
        { id: 3, title: 'Zero to One', category: 'Non-Fiction', price: '$16.99', imageUrl: './images/photo-1641260199871-1c7145f3fc3b.avif' },
        { id: 4, title: 'Harry Potter', category: 'Fiction', price: '$16.99', imageUrl: './images/photo-1618666012174-83b441c0bc76.avif' },
    ];

    //A "gallery" that has filter
    const [books, setBooks] = useState(initialBooks);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        if (category === 'All') {
            setBooks(initialBooks);
        } else {
            const filteredBooks = initialBooks.filter(book => book.category === category);
            setBooks(filteredBooks);
        }
    };

    return (
        <>
            <label htmlFor="categoryFilter">Filter by Category: </label>
            <select
                id="categoryFilter"
                onChange={(e) => handleCategoryChange(e.target.value)}
                value={selectedCategory}
            >
                <option value="All">All</option>
                <option value="Fiction">Fiction</option>
                <option value="Non-Fiction">Non-Fiction</option>
            </select>

            <div className="card-panel">
                {books.map(book => (
                    <div key={book.id} className="card">
                        <img src={book.imageUrl} alt={book.title} />
                        <div className="card-info">
                            <h3>{book.title}</h3>
                            <p className="price">{book.price}</p>
                            <button className="view-product" onClick={() => addToCart({ id: book.id, title: book.title, price: book.price })}>Add to Cart</button>

                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CardPanel;
