import React, { Component } from "react";
import { CopyToClipBoard } from "react-copy-to-clipboard";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      copied: false
    };
  }
  render() {
    const { name, background } = this.props;
    return (
      <CopyToClipBoard text={background}>
        <div className="ColorBox" style={{ background }}>
          <div className="copy-overlay"></div>
          <div className="copy-container">
            <div className="box-content">
              <span>{name}</span>
            </div>
            <button className="copy-button">Copy</button>
          </div>
          <span className="see-more">More</span>
        </div>
      </CopyToClipBoard>
    );
  }
}

export default ColorBox;
