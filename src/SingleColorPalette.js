import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import "./Palette.css";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);

    // this.gatherShades = this.gatherShades.bind(this);
  }

  gatherShades(palette, colorId) {
    let shades = [];
    const allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => {
          return color.id === colorId;
        })
      );
    }
    console.log(shades);
    return shades.slice(1);
  }

  render() {
    const colorBox = this._shades.map(color => (
      <ColorBox
        key={color.hex}
        name={color.name}
        background={color.hex}
        showLink={false}
      />
    ));
    return (
      <div className="Palette">
        <div className="Palette-color">{colorBox}</div>
      </div>
    );
  }
}

export default SingleColorPalette;
