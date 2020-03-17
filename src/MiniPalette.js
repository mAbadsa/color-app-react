import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgrounColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {},
  title: {
    display: "flex",
    position: "relative",
    paddingTop: "0.5rem",
    fontSize: "1rem",
    margin: "0px",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
    "& span": {
      fontSize: "1.5rem",
      marginRight: "0.5rem"
    }
  }
};

function MiniPalette(props) {
  const { classes, id, colors, emoji, paletteName } = props;
  return (
    <div className={classes.root}>
      <div className={classes.colors} />
      {/* {colors.map(color => {
          return (
            <span
              style={{ backgroundColor: color.color }}
            ></span>
          );
        })} */}
      {/* </div> */}
      <h5 className={classes.title} to={`/palette/${id}`}>
        {paletteName} <span>{emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
