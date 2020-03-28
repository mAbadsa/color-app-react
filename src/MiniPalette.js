import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/MiniPaletteStyle";

function MiniPalette(props) {
  const { classes, colors, emoji, paletteName, handleClick } = props;
  const miniColorBox = colors.map(color => {
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
      <div className={classes.colors}>{miniColorBox}</div>
      <h5 className={classes.title}>
          {paletteName}
        <span> {emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
