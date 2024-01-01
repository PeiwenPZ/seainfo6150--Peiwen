import React, { useState } from 'react';
import './Sale.css';

function Sale() {
    const images = [
        './images/photo2.avif',
        './images/photo1.jpeg',
        './images/photo-1641260199871-1c7145f3fc3b.avif',
        './images/photo-1618666012174-83b441c0bc76.avif.',
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    return (
        <>
            <h2>These books are on Sale!</h2>
            <div className="carousel">
                <button onClick={prevImage}>Previous</button>
                <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
                <button onClick={nextImage}>Next</button>
            </div>
        </>
    );
};

export default Sale;
