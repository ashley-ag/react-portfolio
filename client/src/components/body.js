import React from "react";
import "./style.css";

class Body extends React.Component {
  render() {
    return (
      <div className="blkbkg">
        <div className="row aboutmerow">
          <div className="col-12 aboutme">
            <h2>About Me:</h2>
            <p>
              Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-6 icons">
            <a
              className="fab fa-github contact"
              href="https://github.com/ashley-ag"
            />
            <br />
            <a className="fab fa-linkedin-in contact" href="#" />
          </div>
          <div className="col-6 skills">
            <h2>Special Skills and Proficiencies:</h2>
            <ul>
              <li>HMTL5</li>
              <li>CSS</li>
              <li>Javascript</li>
              <li>Program/Project Management</li>
              <li>Express</li>
              <li>Node</li>
              <li>SQL</li>
              <li>MVC</li>
              <li>OOP</li>
              <li>Bootstrap</li>
              <li>APIs (Third party, web, and server-side)</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <hr />
            <h2 className="aboutmerow">
              A few projects I have contributed to:
            </h2>
            <p className="aboutmerow">
              To see all of my work, visit my Github page linked above.
            </p>
          </div>
          <div className="col-4">
            <img className="projectimg" src="./Assets/Images/lyricity.png" />
            <h3 className="aboutmerow">
              <a href="https://mlcohan.github.io/team9/">Lyricity</a>
            </h3>
          </div>
          <div className="col-4">
            <img className="projectimg" src="./Assets/Images/password.PNG" />
            <h3 className="aboutmerow">
              <a href="https://ashley-ag.github.io/03-Password-Generator/">
                Password Generator
              </a>
            </h3>
          </div>
          <div className="col-4">
            <img className="projectimg" src="./Assets/Images/weather.png" />
            <h3 className="aboutmerow">
              <a href="https://ashley-ag.github.io/WeatherNearYou/">
                Weather Application
              </a>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Body;
