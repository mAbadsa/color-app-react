import React, { Component } from "react";
import { withStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import MiniPalette from "./MiniPalette";
import styles from "./styles/PaletteListStyle";

class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`);
  }
  render() {
    const { palettes, classes, deletePalette } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.container}>
          <nav className={classes.nav}>
            <h1>React Colors</h1>
            <Link to="/palette/new">New Palette</Link>
          </nav>
          <div className={classes.palettes}>
            {palettes.map(palette => {
              return (
                <MiniPalette
                  deletePalette={deletePalette}
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
