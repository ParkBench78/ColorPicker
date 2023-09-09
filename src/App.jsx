import { useState } from "react";
// Write your Color component here
const Color = ({ color, setSelectedColor, selectedColor }) => {
  const newClassName =
    selectedColor === color ? `${color} selected` : `${color}`;
  return (
    <div className={newClassName} onClick={() => setSelectedColor(color)}></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected color: </div>
        <div className={selectedColor}>{selectedColor}</div>
      </div>
      <div id="colors-list">
        <Color
          color="red"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="yellow"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
        <Color
          color="blue"
          setSelectedColor={setSelectedColor}
          selectedColor={selectedColor}
        />
      </div>
    </div>
  );
};

export default App;
