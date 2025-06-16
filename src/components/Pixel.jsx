import React from 'react';

const Pixel = ({ color, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color,
        width: '20px',
        height: '20px',
        border: '1px solid #ccc',
        cursor: 'pointer'
      }}
    />
  );
};

export default Pixel;
