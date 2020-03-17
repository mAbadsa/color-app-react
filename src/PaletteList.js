import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import MiniPalette from "./MiniPalette";

const styles = {
  root: {
    backgroundColor: "#2525a5",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "130vh"
  },
  container: {
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    width: "60%"
  },
  nav: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    color: "white"
  },
  palettes: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
    width: "100%",
    boxSizing: "border-box"
  }
};

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => {
              return (
                <MiniPalette
                  key={palette.id}
                  {...palette}
                  handleClick={() => this.goToPalette(palette.id)}
                />
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(PaletteList);
