import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyle";
import DeleteIcon from "@material-ui/icons/Delete";

class MiniPalette extends React.PureComponent {
  constructor(props) {
    super(props);
    this.handleDeleteDialog = this.handleDeleteDialog.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleDeleteDialog(evt) {
    evt.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  handleClick() {
    this.props.goToPalette(this.props.id);
  }

  render() {
    const { classes, colors, emoji, paletteName } = this.props;
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
      <div className={classes.root} onClick={this.handleClick}>
        <DeleteIcon
          className={classes.deleteIcon}
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
