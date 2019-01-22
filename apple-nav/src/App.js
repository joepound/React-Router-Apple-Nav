import React, { Component } from "react";

import "./App.scss";

import NavWrapper from "./components/NavComponents/NavWrapper.js";

class App extends Component {
  constructor() {
    super();

    this.state = {

    };
  }

  render() {
    return (
      <div className="App">
        <NavWrapper />
      </div>
    );
  }
}

export default App;
