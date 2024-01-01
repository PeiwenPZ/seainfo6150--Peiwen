// CardPage.jsx
import React from 'react';
import './CardPage.css';
import TextPage from './TextPage';
import Button from './Button';
import Card from './Card';

function CardPage({ onPageChange }) {

    const handleCardClick = (cardId) => {
        console.log(`Clicked on card ${cardId}`);
        onPageChange('text');
    };


    return (
        <>
            <h2>Card Page</h2>
            <div className='cardPage'>

                <Card>
                    <h3>Card with Link 1</h3>
                    <Button type='button' visual='link' onClick={handleCardClick}> Text Page</Button>
                    <p>Some content</p>
                </Card>


                <Card>
                    <h3>Card without Link 1</h3>
                    <p>Some content</p>
                </Card>

            </div>
        </>
    );
};

export default CardPage;
