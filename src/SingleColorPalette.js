import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteStyle";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.gatherShades(this.props.palette, this.props.colorId);
    this.state = {
      format: "hex"
    };
    this.changeFormat = this.changeFormat.bind(this);
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

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { paletteName, emoji, id } = this.props.palette;
    const { classes } = this.props;
    const { format } = this.state;
    const colorBox = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
        colorShades={true}
      />
    ));
    return (
      <div className={classes.Palette}>
        <Navbar showSlider={false} handleChange={this.changeFormat} />
        <div className={classes.PaletteColor}>
          {colorBox}
          <div className={`${classes.goBack}`}>
            <Link className={classes.backButton} to={`/palette/${id}`}>
              Go Back
            </Link>
          </div>
        </div>
        <Footer paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
