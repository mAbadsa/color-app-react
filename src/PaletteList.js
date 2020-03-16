import React, { Component } from "react";
import { Link } from "react-router-dom";
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
            return (
              <div className="palette-box">
                <div className="palette-box-color">
                  {palette.colors.map(color => {
                    return (
                      <span
                        className="palette-cell-color"
                        style={{ backgroundColor: color.color }}
                      ></span>
                    );
                  })}
                </div>
                <div>
                  <footer>
                    <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    <p>{palette.emoji}</p>
                  </footer>
                </div>
              </div>
            );
          })}
        </div>
        <Link>Go</Link>
      </div>
    );
  }
}

export default PaletteList;
