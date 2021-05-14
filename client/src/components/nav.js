import React from "react";

var Nav = React.createClass({
  render: function () {
    return (
      <div className="row header">
        <div className="col-6">
          <h1>Hi, my name is Ashley.</h1>
          <h2>Full Stack Web Developer</h2>
          <br />
          <button type="button" className="btn btn-light">
            Download my resume!
          </button>
          <button type="button" className="btn btn-light">
            See my work!
          </button>
        </div>
        <div className="col-6">
          <img className="selfimg" src="/Assets/Images/meagain3.png" />
        </div>
      </div>
    );
  },
});

export default Nav;
