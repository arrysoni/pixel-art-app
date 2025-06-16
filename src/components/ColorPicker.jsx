import React from 'react'

const ColorPicker = ({ selectedColor, setSelectedColor }) => {
  return (
    <div style={{ marginTop: '20px' }}>
      <label htmlFor="colorPicker" style={{ marginRight: '10px' }}>🎨 Pick a color:</label>
      <input
        type="color"
        id="colorPicker"
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      />
    </div>
  );
};

export default ColorPicker