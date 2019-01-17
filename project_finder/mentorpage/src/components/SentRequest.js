import React, { Component } from "react";

class SentRequest extends Component {
  state = {
    MentorName: " Mentor",
    Mentorskill: "Skill",

    RequestAccept: "Accepted",
    RequestPending: "Pending"
  };
  render() {
    return (
      <React.Fragment>
        <div className={this.ResponsiveCard()}>
          <div className="box-1 w-400 ">
            <div className="box-1-visual" />
            <div className=" box-1 box-1-content">
              {/* <img src={unicodelogo} alt="" />
               */}
              <strong className="second-title">{this.state.MentorName}</strong>
              <p className="skill-style">Frontend dev</p>
              <a
                href=""
                style={{
                  fontSize: "16px",
                  color: "#12b6a6",
                  textDecoration: "underline"
                }}
              >
                {this.state.RequestAccept}
              </a>
              {/*<a
                href=""
                style={{
                  fontSize: "16px",
                  color: "#12b6a6",
                  textDecoration: "underline"
                }}
              >
                {this.state.Request}
              </a>*/}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
  ResponsiveCard = () => {
    let w = window.innerWidth;
    console.log(w);
    let responsive = "";
    if (w > 1000) responsive += "column w-33 ";
    else if (w < 617) responsive += "column  w-80";
    else responsive += "column  w-45";

    return responsive;
  };
}
export default SentRequest;
