import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyle";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends React.Component {
  constructor(props) {
    super(props);
    // this.deletePalette = this.deletePalette.bind(this);
    this.handleDeleteDialog = this.handleDeleteDialog.bind(this);
  }

  // deletePalette(evt) {
  //   evt.stopPropagation();
  //   this.props.deletePalette(this.props.id);
  // }

  handleDeleteDialog(evt) {
    evt.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  render() {
    const { classes, colors, emoji, paletteName, handleClick } = this.props;
    const miniColorBox = colors.map((color) => {
      return (
        <div
          className={classes.miniColor}
          style={{ backgroundColor: color.color }}
          key={color.name}
        />
      );
    });
    return (
      <div className={classes.root} onClick={handleClick}>
        <DeleteIcon
          className={classes.deleteIcon}
          // onClick={this.deletePalette}
          onClick={this.handleDeleteDialog}
        />
        <div className={classes.colors}>{miniColorBox}</div>
        <h5 className={classes.title}>
          {paletteName}
          <span> {emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
