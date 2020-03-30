import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    // display: "flex",
    margin: "0 auto",
    // marginBottom: "-4px",
    width: "20%",
    height: "25%",
    position: "relative",
    display: "inline-block",
    cursor: "pointer"
  }
};

function DraggableColorBox(props) {
  const { classes } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: props.color }}>
      {props.colorName}
    </div>
  );
}

export default withStyles(styles)(DraggableColorBox);
