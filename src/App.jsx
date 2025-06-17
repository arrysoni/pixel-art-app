import React, { useState } from 'react';
import Canvas from './components/Canvas';
import ColorPicker from './components/ColorPicker';

const App = () => {
  const [pixelGrid, setPixelGrid] = useState(new Array(256).fill("#FFFFFF"));
  const [selectedColor, setSelectedColor] = useState("#000000");

  const clearGrid = () => {
    setPixelGrid(new Array(256).fill("#FFFFFF"));
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        width: '100%',
        backgroundColor: '#1e1e1e',
        color: 'white',
        padding: '20px'
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Pixel Art App</h1>

      <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
        <Canvas
          pixelGrid={pixelGrid}
          setPixelGrid={setPixelGrid}
          selectedColor={selectedColor}
        />
      </div>

      <ColorPicker
        selectedColor={selectedColor}
        setSelectedColor={setSelectedColor}
      />

      <button
        onClick={clearGrid}
        style={{
          marginTop: '20px',
          padding: '8px 16px',
          backgroundColor: '#444',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer'
        }}
      >
        🧼 Clear Canvas
      </button>
    </div>
  );
};

export default App;
