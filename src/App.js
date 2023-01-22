import "./App.css";
import React, { Component } from "react";
import Profile from "./Component/Profile";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }
  handleClick = () => this.setState({ show: !this.state.show });
  render() {
    return <div className="App">
      <button onClick={this.handleClick}>show/hide</button>
      {this.state.show ? <Profile /> : null}
      </div>;
  }
}
