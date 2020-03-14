import React, { Component } from "react";
import Navbar from './Navbar';
import ColorBox from "./ColorBox";
import "./Palette.css";

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
        <Navbar level={level} changeLevel={this.changeLevel}/>
        <div className="Palette-color">{colorBox}</div>
      </div>
    );
  }
}

export default Palette;
