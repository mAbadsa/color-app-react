import React, { Component } from "react";
import ColorBox from "./ColorBox";
import Slider from "rc-slider";
import "./Palette.css";
import "rc-slider/assets/index.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500
    };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  render() {
    const colors = this.props.palette.colors;
    const level = this.state.level;
    const colorBox = colors[level].map((color, i) => {
      return <ColorBox background={color.hex} name={color.name} key={i} />;
    });
    return (
      <div className="Palette">
        <Slider
          defaultValue={level}
          min={100}
          max={900}
          step={100}
          onAfterChange={this.changeLevel}
        />
        <div className="Palette-color">{colorBox}</div>
      </div>
    );
  }
}

export default Palette;
