import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import chroma from 'chroma-js';
import "./ColorBox.css";
import color from "@material-ui/core/colors/amber";

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
    const { name, background, moreUrl, showLink, colorShades } = this.props;
    const { copied } = this.state;
    const isDarkColor = chroma(background).luminance() <= 0.1;
    const isLightColor = chroma(background).luminance() >= 0.65;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={colorShades ? "ColorBox color-shades" : "ColorBox"} style={{ background }}>
          <div
            className={`copy-overlay ${copied ? "show" : "show hide"}`}
            style={{ background }}
          />
          <div className={`copy-msg ${copied ? "show" : "show hide"}`}>
            <h2 className={`${isLightColor && 'dark-color'}`}>Copied</h2>
            <p className={isLightColor ? 'dark-text' : ''}>{background}</p>
          </div>
          <div className="copy-container">
            <div className="box-content">
              <span className={isDarkColor ? 'light-color' : ''}>{name}</span>
              
            </div>
            <button className={isLightColor ? "copy-button dark-color" : "copy-button"}>Copy</button>
          </div>
          {
            showLink && (
              <Link to={moreUrl} onClick={e => e.stopPropagation()}>
                <span className={isLightColor ? "see-more dark-color" : "see-more" }>More</span>
              </Link>
            )
          }
          
        </div>
      </CopyToClipboard>
    );
  }
}

export default ColorBox;
