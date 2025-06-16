import React, {useState} from 'react';
import Pixel from "./components/Pixel";
import Canvas from "./components/Canvas";

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

  return (
    <div>
      <h1>Pixel Art App</h1>
      <Canvas 
        pixelGrid={pixelGrid} 
        setPixelGrid={setPixelGrid} 
        selectedColor={selectedColor} 
      />
    </div>
  )
}

export default App;