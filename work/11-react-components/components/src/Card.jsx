// Card.jsx
import React from 'react';

const Card = ({ onClick, children }) => {
  const cardStyle = {
    border: '1px solid #ccc',
    padding: '10px',
    margin: '10px',
    cursor: 'pointer',
  };

  return (
    <div style={cardStyle} onClick={onClick} className="card">
      {children}
    </div>
  );
};

export default Card;

