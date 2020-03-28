import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "./styles/PaletteFooterStyle";

function Footer(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <div className={classes.PaletteFooter}>
      {paletteName}
      <span>{emoji}</span>
    </div>
  );
}

export default withStyles(styles)(Footer);
