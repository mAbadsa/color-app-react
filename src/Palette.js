import React, { Component } from "react";
import ColorBox from "./ColorBox";
import './Palette.css';

class Palette extends Component {
  render() {
      const colorBox = this.props.colors.map((color, i) => {
          console.log(color);
          return <ColorBox background={color.color} name={color.name} key={i}/>
      })
    // const colorPanel = this.props.colors.map(colorObj => {
    //   const colorArr = colorObj.colors.map((color, i) => {
    //     console.log(color);
    //     return (
    //       <span
    //         key={i}
    //         style={{
    //           backgroundColor: color.color,
    //           display: "inline-block",
    //           height: 80 + "px",
    //           width: 80 + "px",
    //           marginBottom: -4 + "px"
    //         }}
    //       ></span>
    //     );
    //   });
    //   return colorArr;
    // });
    return (
      <div className="Palette">
        <div className="Palette-color">{colorBox}</div>
      </div>
    );
  }
}

export default Palette;
