import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import ColorBox from "./ColorBox";
import Footer from "./Footer";
import { withStyles } from "@material-ui/styles";
// import "./ColorBox.js";
// import "./Palette.css";

const styles = {
  Palette: {
    height: "100vh"
  },
  PaletteColor: {
    height: "90%"
  },
  goBack: {
    marginBottom: "-4px",
    width: "20%",
    height: "50%",
    position: "relative",
    display: "inline-block",
    backgroundColor: "#000",
    cursor: "pointer",
    opacity: 1
  },
  backButton: {
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100px",
    height: "30px",
    textAlign: "center",
    fontSize: "1rem",
    outline: "none",
    border: "none",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    lineHeight: "30px",
    textTransform: "uppercase",
    color: "white",
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.3s"
  }
};

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
