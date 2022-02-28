import React, { Component } from "react";
import { choice } from "./Helpers";
import "./ColorBox.css";

class ColorBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: choice(),
    };
    this.handleclick = this.handleclick.bind(this);
  }

  randoColor() {
    let newColor = choice();
    this.setState({ bgColor: newColor });
  }

  handleclick() {
    this.randoColor();
  }

  render() {
    return (
      <div className="ColorBox">
        <div
          onLoad={this.handleclick}
          onClick={this.handleclick}
          style={{ backgroundColor: this.state.bgColor }}
          className="ColorBox-div"
        >
          {this.state.bgColor}
        </div>
      </div>
    );
  }
}

export default ColorBox;
