import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import chroma from 'chroma-js';
import "./ColorBox.css";

const styles = {
  ColorBox: {
    marginBottom: "-4px",
    width: "20%",
    height: props => (props.colorShades ? "50%" : "25%"),
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    "&:hover button": {
      opacity: 1,
      transition: "opacity 0.2s",
    }
  },
  colorText: {
    color: props => chroma(props.background).luminance() >= 0.65 ? '#333' : '#eee'
  },

  colorName: {
    color: props => chroma(props.background).luminance() <= 0.1 ? 'white' : 'black'
  },

  seeMore: {
    position: "absolute",
    width: "60px",
    height: "30px",
    bottom: "0px",
    right: "0px",
    color: props => chroma(props.background).luminance() >= 0.60 ? '#333' : '#eee',
    border: "none",
    backgroundColor: props => chroma(props.background).luminance() >= 0.60 ? "rgba(255, 255, 255, 0.3)" : "rgba(255, 255, 255, 0.3)",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },

  copyButton: {
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
    backgroundColor: props => chroma(props.background).luminance() >= 0.60 ? "rgba(100, 100, 100, 0.3)" : "rgba(255, 255, 255, 0.3)",
    lineHeight: "30px",
    textTransform: "uppercase",
    opacity: 0,
    color: props => chroma(props.background).luminance() >= 0.60 ? '#333' : '#eee',
    cursor: "pointer",
    transition: "opacity 0.3s",
  }
}

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const { name, background, moreUrl, showLink, colorShades, classes } = this.props;
    const { copied } = this.state;
    const isLightColor = chroma(background).luminance() >= 0.65;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div
            className={`copy-overlay ${copied ? "show" : "show hide"}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied ? "show" : "show hide"}`}>
            <h2 className={`${isLightColor && 'dark-color'}`}>Copied</h2>
            <p className={classes.colorText}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={classes.colorName}>{name}</span>
              
            </div>
            <button className={classes.copyButton}>Copy</button>
          </div>
          {
            showLink && (
              <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                <span className={classes.seeMore}>More</span>
              </Link>
            )
          }
          
        </div>
      </CopyToClipboard>
    );
  }
}

export default withStyles(styles)(ColorBox);
