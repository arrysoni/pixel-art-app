import React, {useState} from 'react';
import Pixel from "./components/Pixel";
import Canvas from "./components/Canvas";
import ColorPicker from './components/ColorPicker';

const basicColors = [
  "#FF0000", // Red
  "#00FF00", // Lime
  "#0000FF", // Blue
  "#FFFF00", // Yellow
  "#FFA500", // Orange
  "#800080", // Purple
  "#00FFFF", // Cyan / Aqua
  "#FFC0CB", // Pink
  "#A52A2A", // Brown
  "#808080", // Gray
  "#000000", // Black
  "#FFFFFF", // White
  "#008000", // Green
  "#808000", // Olive
  "#800000", // Maroon
  "#000080", // Navy
  "#008080", // Teal
  "#C0C0C0"  // Silver
];

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
      justifyContent: 'flex-start',
      minHeight: '100vh',
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
  )
}

export default App;