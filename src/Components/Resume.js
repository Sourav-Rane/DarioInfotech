import React, { Component } from "react";
import python_logo from "../assets/images/Python-Logo.png";
import react_logo from "../assets/images/React-Logo.png";
import webDev_logo from "../assets/images/webdev.jpg";
import class11_logo from "../assets/images/class11.jpg";

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
      var education = [...this.props.data.education];
      var python = (
        <div key={education[0].school}>
          <h3>{education[0].school}</h3>
          <p className="info">
            {education[0].degree} <span>&bull;</span>
            <em className="date">{education[0].graduated}</em>
          </p>
          <p>{education[0].description}</p>
        </div>
      );

      var webdev = (
        <div key={education[1].school}>
          <h3>{education[1].school}</h3>
          <p className="info">
            {education[1].degree} <span>&bull;</span>
            <em className="date">{education[1].graduated}</em>
          </p>
          <p>{education[1].description}</p>
        </div>
      );

      var react = (
        <div key={education[2].school}>
          <h3>{education[2].school}</h3>
          <p className="info">
            {education[2].degree} <span>&bull;</span>
            <em className="date">{education[2].graduated}</em>
          </p>
          <p>{education[2].description}</p>
        </div>
      );

      var class11 = (
        <div key={education[3].school}>
          <h3>{education[3].school}</h3>
          <p className="info">
            {education[3].degree} <span>&bull;</span>
            <em className="date">{education[3].graduated}</em>
          </p>
          <p>{education[3].description}</p>
        </div>
      );
    }

    return (
      <section id="resume">
        <hr className="line_break" id="courses"></hr>
        <h6 className="course-header">Top Courses offered by us</h6>

        <hr></hr>

        <div className="course-row">
          <div className="course-image">
            <img src={python_logo} style={{ height: 215, width: 215 }} />
          </div>
          <div className="course-description">{python}</div>
          <div className="syllabus-btn">
            <button>Course syllabus</button>
          </div>
        </div>

        <hr></hr>

        <div className="course-row">
          <div className="course-image">
            <img src={webDev_logo} style={{ height: 215, width: 215 }} />
          </div>
          <div className="course-description">{webdev}</div>
          <div className="syllabus-btn">
            <button>Course syllabus</button>
          </div>
        </div>
        <hr></hr>

        <div className="course-row">
          <div className="course-image">
            <img src={react_logo} style={{ height: 215, width: 215 }} />
          </div>
          <div className="course-description">{react}</div>
          <div className="syllabus-btn">
            <button>Course syllabus</button>
          </div>
        </div>

        <hr></hr>

        <div className="course-row">
          <div className="course-image">
            <img src={class11_logo} style={{ height: 215, width: 215 }} />
          </div>
          <div className="course-description">{class11}</div>
          <div className="syllabus-btn">
            <button>Course syllabus</button>
          </div>
        </div>

        <hr></hr>
      </section>
    );
  }
}

export default Resume;
