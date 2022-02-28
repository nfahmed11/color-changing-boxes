import React, { Component } from "react";
import ColorBox from "./ColorBox";
import "./ColorsContainer.css";

class ColorsContainer extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className="ColorsContainer-h1">CLICK ON A BOX!</h1>
        <div className="ColorsContainer">
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
          <ColorBox />
        </div>
      </div>
    );
  }
}

export default ColorsContainer;
