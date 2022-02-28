import React, { Component } from "react";
import "./App.css";
import ColorsContainer from "./ColorsContainer";

class App extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <div>
          <ColorsContainer />
        </div>
      </div>
    );
  }
}

export default App;
