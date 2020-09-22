import React, { Component } from "react";
import python_logo from "../assets/images/Python-Logo.png";
import react_logo from "../assets/images/React-Logo.png";
import react_native_logo from "../assets/images/React-Native-Logo.png";

class Resume extends Component {
  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (this.props.data) {
      var skillmessage = this.props.data.skillmessage;
      var education = this.props.data.education.map(function (education) {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <p>{education.description}</p>
          </div>
        );
      });
    }

    return (
      <section id="resume">
        <h6 className="course-header" id="courses">
          Courses
        </h6>
        
        <div className="course-row">
          <div className="course-image">
            <img src={react_logo} style={{ height: 215, width: 215 }} />
          </div>
          <div className="course-description">{education}</div>
        </div>

      </section>
    );
  }
}

export default Resume;
