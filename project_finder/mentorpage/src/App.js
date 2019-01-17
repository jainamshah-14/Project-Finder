import React, { Component } from "react";
import "./css/buddy.css";
import "./css/buddy.css.map";
import "./js/buddy";
import "./js/buddy.js.map";
import "./App.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Home from "./components/Home.jsx";

class App extends Component {
  state = {
    findmentors: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }],
    recievedrequests: [{ id: 1 }, { id: 2 }, { id: 3 }],
    sentrequests: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />

        <Home
          findmentors={this.state.findmentors}
          recievedrequests={this.state.recievedrequests}
          sentrequests={this.state.sentrequests}
        />
        <div className="last" />
      </React.Fragment>
    );
  }
}

export default App;
