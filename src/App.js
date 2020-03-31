import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import SingleColorPalette from "./SingleColorPalette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import NewPaletteForm from "./NewPaletteForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      palettes: seedColors
    }
    this.savePalette = this.savePalette.bind(this);
    this.findPalette = this.findPalette.bind(this);
  }
  findPalette(id) {
    return this.state.palettes.find(palette => {
      return palette.id === id;
    });
  }
  savePalette(newPalette) {
    console.log(newPalette);
    this.setState({ palettes: [...this.state.palettes, newPalette]});
  }
  render() {
    // console.log(generatePalette(seedColors[2]));
    return (
      <Switch>
        <Route exact path="/palette/new" render={(routeProps) => <NewPaletteForm {...routeProps} palettes={this.state.palettes} savePalette={this.savePalette}/>} />
        <Route
          exact
          path="/"
          render={routeProps => (
            <PaletteList {...routeProps} palettes={this.state.palettes} />
          )}
        />
        <Route
          exact
          path="/palette/:id"
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path="/palette/:paletteId/:colorId"
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;
