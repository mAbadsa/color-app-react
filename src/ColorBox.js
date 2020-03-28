import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/ColorBoxStyle";

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
    const { name, background, moreUrl, showLink, classes } = this.props;
    const { copied } = this.state;
    return (
      <CopyToClipboard text={background} onCopy={this.changeCopyState}>
        <div className={classes.ColorBox} style={{ background }}>
          <div
            className={`${classes.copyOverlay} ${copied ? classes.showOverlay : `${classes.showOverlay} ${classes.hideOverlay}`}`}
            style={{ background }}
          />
          <div className={`${classes.copyMsg} ${copied ? classes.showCopyMsg : `${classes.showCopyMsg} ${classes.hideCopyMsg}`}`}>
            <h2 className={classes.copiedBackground}>Copied</h2>
            <p className={classes.colorText}>{background}</p>
          </div>
          <div>
            <div className={classes.boxContent}>
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
