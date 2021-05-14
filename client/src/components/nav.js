import React from "react";
import "./style.css";

class Nav extends React.Component {
  render() {
    return (
      <div className="row header">
        <div className="col-6">
          <h1>Hi, my name is Ashley.</h1>
          <h2>Full Stack Web Developer</h2>
          <br />
          <button type="button" className="btn btn-light button">
            Download my resume!
          </button>
          <button type="button" className="btn btn-light button">
            See my work!
          </button>
        </div>
        <div className="col-6">
          <img
            className="selfimg"
            src={require("./images/meagain3.png")}
            alt={"Lyricity"}
          />
        </div>
      </div>
    );
  }
}

export default Nav;
