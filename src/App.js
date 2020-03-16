import React from "react";
import { Route, Switch } from 'react-router-dom';
import Palette from "./Palette";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";

class App extends React.Component {
  render() {
    console.log(generatePalette(seedColors[2]));
    return (
        <Switch>
          <Route exact path='/'render={() => <h1>Palette List</h1>}/>
          <Route exact path='/palette/:id' render={() => <Palette palette={generatePalette(seedColors[3])} /> }/>
        </Switch>
      // <div className="App">
      // </div>
    );
  }
}

export default App;
