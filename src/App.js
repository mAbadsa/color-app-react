import React from "react";
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends React.Component {
  render() {
    console.log(generatePalette(seedColors[2]));
    return (
      <div className="App">
        <Palette {...seedColors[0]} />
        <Palette {...seedColors[1]} />
        <Palette {...seedColors[2]} />
        <Palette {...seedColors[3]} />
      </div>
    );
  }
}

export default App;
