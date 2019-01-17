import React, { Component } from "react";
import "../css/buddy.min.css";
import "../css/buddy.css.map";
import "../css/buddy.plugins.css";
import "../js/buddy.js";
import "../js/buddy.js.map";
import "../css/fontawesome.css";

import unicodelogo from "../unicodelogo.jpg";
//import "./navbar.css";
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="right">
          <li id="rightnav">
            <a id="name" href="#">
              John doe
              <i id="usericon" class="far fa-user" />
            </a>
          </li>
          <li id="rightnav">
            <a href="#">Events</a>
          </li>
          <li id="rightnav">
            <a href="#">Make a team</a>
          </li>
          <li id="rightnav">
            <a id="thick" href="#">
              Find a mentor
            </a>
          </li>
          <li>
            <img src={unicodelogo} alt="" id="unilogo" />
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;

{
  /*class Navbar extends Component {
  state = {
    profileName: "John Doe"
  };
  render() {
    return (
      <React.Fragment>
        <header class="page-header top-bar " role="banner">
          <div class="page-wrapper full-width">
            <input
              type="text"
              style={{ height: 59 }}
              class="br-30 searchinput"
              placeholder="&#61442; Search"
            />
            <div class="page-nav" id="navOne">
              <nav role="navigation">
                <ul class="nav-primary">
                  <li>
                    <a href="#" style={{ color: "#323232" }}>
                      Find a Mentor
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "#323232" }}>
                      Make a Team
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "#323232" }}>
                      Events
                    </a>
                  </li>
                  <li>
                    <a href="#" style={{ color: "#12b6a6" }}>
                      {this.state.profileName}
                      <div class="fa fa-user"> </div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Navbar;
*/
}
