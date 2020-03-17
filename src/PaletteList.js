import React, { Component } from "react";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import "./PaletteList.css";

class PaletteList extends Component {
  render() {
    const { palettes } = this.props;
    return (
      <div className="PaletteList">
        <div className="header">
          <h1>Palette List</h1>
        </div>
        <div className="palettes-container">
          {palettes.map(palette => {
            return <MiniPalette key={palette.id} {...palette}/>;
          })}
        </div>
      </div>
    );
  }
}

export default PaletteList;
