import React, { Component } from "react";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyle";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = {
      level: 500,
      format: "hex"
    };
    this.changeLevel = this.changeLevel.bind(this);
    this.changeFormat = this.changeFormat.bind(this);
  }

  changeLevel(level) {
    this.setState({ level });
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { level, format } = this.state;
    const colorBox = colors[level].map((color, i) => {
      return (
        <ColorBox
          background={color[format]}
          name={color.name}
          key={color.id}
          moreUrl={`/palette/${id}/${color.id}`}
          showLink={true}
          colorShades={false}
        />
      );
    });
    return (
      <div className={classes.Palette}>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          handleChange={this.changeFormat}
          showSlider={true}
        />
        <div className={classes.PaletteColor}>{colorBox}</div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(Palette);
