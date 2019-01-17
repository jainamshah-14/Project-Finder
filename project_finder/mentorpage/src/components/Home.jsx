import React, { Component } from "react";
import "../css/buddy.css";
import "../css/buddy.css.map";
import "../css/buddy.plugins.css";
import "../js/buddy.js";
import "../js/buddy.js.map";
import "../css/fontawesome.css";
import SentRequest from "./SentRequest";
import FindMentor from "./FindMentor";
import RecievedRequest from "./RecievedRequest";

class Home extends Component {
  state = {
    findmentors: [
      { id: 1 },
      { id: 2 },
      { id: 3 },
      { id: 4 },
      { id: 5 },
      { id: 6 },
      { id: 7 },
      { id: 8 },
      { id: 9 },
      { id: 10 },
      { id: 11 },
      { id: 12 }
    ],
    recievedrequests: [{ id: 1 }, { id: 2 }, { id: 3 }],
    sentrequests: [{ id: 1 }, { id: 2 }, { id: 3 }]
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ backgroundColor: "#f6f6f6" }}>
          <div
            className="tabs-wrapper margin-left width-total"
            id="tabsWrapper"
            style={{ marginLeft: "195px", marginRight: "195px" }}
          >
            <ul role="tablist" className="tabs" arial-label="tabs-description">
              <li>
                <button
                  role="tab"
                  aria-selected="true"
                  aria-controls="tab-1"
                  style={{ fontSize: "24px" }}
                >
                  Find Mentor
                </button>
                <div
                  tabIndex="0"
                  role="tabpanel"
                  id="tab-1"
                  aria-labelledby="tab-1"
                >
                  <div className="grid-flex  ">
                    <div className="input column o-75 w-26">
                      <input
                        type="text"
                        style={{ height: 59 }}
                        className="br-30 searchinput"
                        placeholder="&#61442; Search"
                      />
                    </div>
                  </div>
                  <div style={{ paddingTop: 50 }} className=" text-center">
                    <div className="grid-flex grid-articles margin-percent">
                      {this.state.findmentors.map(findmentor => (
                        <FindMentor
                          key={findmentor.id}
                          findmentor={findmentor}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="tab-2"
                  id="tab2"
                  style={{ fontSize: "24px" }}
                >
                  Recieved Request
                </button>
                <div
                  tabindex="0"
                  role="tabpanel"
                  id="tab-2"
                  aria-labelledby="tab-2"
                  hidden=""
                >
                  <div className="grid-flex ">
                    <div className="input column o-75 w-26">
                      <input
                        type="text"
                        style={{ height: 59 }}
                        className="br-30 searchinput"
                        placeholder="&#61442; Search"
                      />
                    </div>
                  </div>
                  <div style={{ paddingTop: 50 }} className=" text-center">
                    <div className="grid-flex grid-articles margin-percent">
                      {this.state.recievedrequests.map(recievedrequest => (
                        <RecievedRequest
                          key={recievedrequest.id}
                          recievedrequest={recievedrequest}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <button
                  role="tab"
                  aria-selected="false"
                  aria-controls="tab-3"
                  id="tab3"
                  style={{ fontSize: "24px" }}
                >
                  Sent Request
                </button>
                <div
                  tabindex="0"
                  role="tabpanel"
                  id="tab-3"
                  aria-labelledby="tab-3"
                  tabindex="0"
                  hidden=""
                >
                  <div className="grid-flex ">
                    <div className="input column o-75 w-26">
                      <input
                        type="text"
                        style={{ height: 59 }}
                        className="br-30 searchinput"
                        placeholder="&#61442; Search"
                      />
                    </div>
                  </div>
                  <div style={{ paddingTop: 50 }} className=" text-center">
                    <div className="grid-flex grid-articles margin-percent">
                      {this.props.sentrequests.map(sentrequest => (
                        <SentRequest
                          key={sentrequest.id}
                          sentrequest={sentrequest}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
