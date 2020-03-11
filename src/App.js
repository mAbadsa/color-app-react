import React from 'react';
import Palette from './Palette';
import seedColors from './seedColors';

function App() {
  return (
    <div className="App">
      <Palette {...seedColors[0]}/>
      <Palette {...seedColors[1]}/>
      <Palette {...seedColors[2]}/>
      <Palette {...seedColors[3]}/>
    </div>
  );
}

export default App;
