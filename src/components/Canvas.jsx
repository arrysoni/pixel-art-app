import React from 'react';

const Canvas = ({ pixelGrid, setPixelGrid, selectedColor }) => {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(16, 20px)',
        gridTemplateRows: 'repeat(16, 20px)',
        gap: '1px',
        marginTop: '20px'
      }}
    >
      {pixelGrid.map((color, index) => (
        <div
          key={index}
          onClick={() => {
            const newGrid = [...pixelGrid];
            newGrid[index] = selectedColor;
            setPixelGrid(newGrid);
          }}
          style={{
            backgroundColor: color,
            width: '20px',
            height: '20px',
            border: '1px solid #ccc',
            cursor: 'pointer'
          }}
        />
      ))}
    </div>
  );
};

export default Canvas;
