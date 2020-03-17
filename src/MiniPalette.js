import React from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";

const styles = {
  root: {
    backgroundColor: "white",
    border: "1px solid black",
    borderRadius: "5px",
    padding: "0.5rem",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      cursor: "pointer"
    }
  },
  colors: {
    width: "100%",
    height: "150px",
    backgroundColor: "#dae1e4",
    borderRadius: "5px",
    overflow: "hidden"
  },
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
      fontSize: "1.2rem",
      marginRight: "0.2rem"
    }
  },
  link: {
    fontSize: "0.8rem",
    textDecoration: "none",
    color: "black"
  },
  miniColor: {
    display: "inline-block",
    position: "relative",
    margin: "0 auto",
    marginBottom: "-4px",
    width: "25%",
    height: "20%"
  }
};

function MiniPalette(props) {
  const { classes, id, colors, emoji, paletteName } = props;
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
    <div className={classes.root}>
      <div className={classes.colors}>{miniColorBox}</div>
      <h5 className={classes.title}>
        <Link className={classes.link} to={`/palette/${id}`}>
          {paletteName}
        </Link>
        <span> {emoji}</span>
      </h5>
    </div>
  );
}

export default withStyles(styles)(MiniPalette);
