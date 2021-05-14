/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import "./components/style.css";
import Body from "./components/body";
import Nav from "./components/nav";
import Footer from "./components/footer";

class App extends Component {
  render() {
    return (
      <body>
        <div>
          <Nav />
          <Body />
          <Footer />
        </div>
      </body>
    );
  }
}

export default App;
