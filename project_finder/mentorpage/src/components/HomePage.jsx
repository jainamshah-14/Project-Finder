import React, { Component } from "react";
import "../css/buddy.min.css";
import "../css/buddy.css.map";
import "../css/buddy.plugins.css";
import "../js/buddy.js";
import "../js/buddy.js.map";
import "../css/fontawesome.css";

import FindMentor from "./FindMentor";

class Homepage extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="bg-gray-lightest">
          <div className="grid-flex v-align-bottom grid-articles">
            <div className="column o-10 w-23 mt-2">
              <a className="c-black project-hover mt-2" href="">
                FindMentor
              </a>
            </div>
            <div className="column o-2 mt-2 ">
              <a className="c-black project-hover " href="RecievedRequest.js">
                Recieved Request
              </a>
            </div>
            <div className="column o-2 mt-2 ">
              <a className="c-black project-hover " href="">
                Sent Request
              </a>
            </div>
          </div>
          <div className="grid-flex v-align-top ">
            <div className="column o-10 w-80 ">
              <hr />
            </div>
          </div>
          <div className="grid-flex">
            <div className="input column o-70 w-20">
              <input
                type="text"
                className="br-25 searchinput"
                placeholder="Search"
              />
            </div>
          </div>
          <div
            style={{ paddingTop: 50, paddingBottom: 50 }}
            className=" text-center"
          >
            <div className="grid-flex grid-articles margin-percent">
              {this.props.findmentors.map(findmentor => (
                <FindMentor key={findmentor.id} findmentor={findmentor} />
              ))}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Homepage;
