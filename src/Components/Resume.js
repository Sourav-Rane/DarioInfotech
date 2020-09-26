import React, { Component } from "react";
import python_logo from "../assets/images/Python-Logo.png";
import react_logo from "../assets/images/React-Logo.png";
import webDev_logo from "../assets/images/webdev.jpg";
import class11_logo from "../assets/images/class11.jpg";
import Modal from "./modal/modal";

class Resume extends Component {
  constructor() {
    super();
    this.state = { open: false, syllabus: "" };
  }

  getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  showModal(index){
    this.setState({syllabus:null})
  }

  closeModal(){

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

    let py_syl = (
      <ol>
        <li>Python Setup</li>
        <li>
          Python Object and DataStructure Basics
          <ol>
            <li>Numbers</li>
            <li>Strings</li>
            <li>Lists</li>
            <li>Dictionaries</li>
            <li>Tuples</li>
            <li>Booleans</li>
            <li>File I/O</li>
          </ol>
        </li>
        <li>Python Comparison Operators</li>
        <li>
          Python Statements
          <ol>
            <li>Conditional Statements</li>
            <li>Loops</li>
            <li>List Comprehension</li>
          </ol>
        </li>
        <li>Methods and Functions</li>
        <li style={{ fontWeight: "bold" }}>Project 1</li>
        <li>Object Oriented Programing</li>
        <li>Modules and Packages </li>
        <li>Errors and Exception Handling</li>
        <li style={{ fontWeight: "bold" }}>Project 2</li>
        <li> Python Decorators </li>
        <li>Python Generators </li>
        <li>Advanced Python Modules</li>
        <li>Web Scraping with Python </li>
        <li> Working with images with Python</li>
        <li>Working with PDFs and CSV files</li>
        <li style={{ fontWeight: "bold" }}>Final Capstone Project </li>
        <li>Advanced Python Objects and Data Structures</li>
        <li>Introduction to GUI </li>
      </ol>
    );

    let web_syl = (
      <ol>
        <li>Introduction to Front End Development </li>
        <li>Getting started with Editors and IDEs </li>
        <li>Introduction to HTML </li>
        <li>Intermediate HTML </li>
        <li>Introduction to CSS </li>
        <li>Intermediate CSS </li>
        <li> Introduction to JavaScript</li>
        <li>Intermediate JavaScript</li>
        <li>Advanced JavaScript </li>
        <li style={{ fontWeight: "bold" }}>
          A complete Project using HTML CSS JS{" "}
        </li>
      </ol>
    );

    let react_syl = (
      <ol>
        <li>Getting Started </li>
        <li>ES6 JavaScript (Next Generation) Concepts</li>
        <li>Understanding the Base Features of React </li>
        <li> List and Conditionals </li>
        <li>Styling React Components and Elements</li>
        <li>Debugging React App</li>
        <li>In-Dept understanding of React Components and Internals </li>
        <li style={{ fontWeight: "bold" }}>
          Build a Real App: Burger Builder{" "}
        </li>
        <li>Reaching out to the Web</li>
        <li>Accessing a Server </li>
        <li>React Routing</li>
        <li>Forms and Validation </li>
        <li>Redux</li>
        <li>Integrating Redux with the Real App </li>
        <li>Authentication of the project </li>
        <li> Deploying the App to Web</li>
        <li>Working with Webpack </li>
        <li>React Hooks</li>
        <li> Using Hooks in the Real App</li>
      </ol>
    );

    let class11_syl = (
      <ol>
        <li>
          Computer Systems and Organisation
          <ol>
            <li>Basic computer organisation</li>
            <li>Types of software</li>
            <li>Memory Units</li>
            <li>Boolean logic</li>
            <li>Number System</li>
            <li>Encoding Schemes</li>
            <li>Concept of Compiler and Interpreter</li>
            <li>Operating System (OS) </li>
            <li>Concept of cloud computing and cloud services</li>
          </ol>
        </li>
        <li>
          Computational Thinking and Programming - 1
          <ol>
            <li>Introduction to Problem solving</li>
            <li>Decomposition</li>
            <li>Features of Python</li>
            <li>Comments</li>
            <li>Introduce the notion of a variable and methods</li>
            <li>Knowledge of data types and operators</li>
            <li>Operators and types</li>
            <li>Execution of a program and error debugging</li>
            <li>Conditional statements</li>
            <li>Notion of iterative computation and control flow</li>
            <li>Strings and its methods</li>
            <li>Lists and its methods</li>
            <li>Tuples and its methods</li>
            <li>Dictionary and methods</li>
            <li>Sorting algorithm</li>
            <li>Introduction to Python modules:</li>
          </ol>
        </li>
      </ol>
    );

      


    return (
      <React.Fragment>
        {/* <Modal data={class11_syl} /> */}
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
              {/* <button onClick={()=>this.showModal()}>Course syllabus</button> */}
            </div>
          </div>

          <hr></hr>

          <div className="course-row">
            <div className="course-image">
              <img src={webDev_logo} style={{ height: 215, width: 215 }} />
            </div>
            <div className="course-description">{webdev}</div>
            <div className="syllabus-btn">
              {/* <button onClick={()=>this.showModal()}>Course syllabus</button> */}
            </div>
          </div>
          <hr></hr>

          <div className="course-row">
            <div className="course-image">
              <img src={react_logo} style={{ height: 215, width: 215 }} />
            </div>
            <div className="course-description">{react}</div>
            <div className="syllabus-btn">
              {/* <button onClick={()=>this.showModal()}>Course syllabus</button> */}
            </div>
          </div>

          <hr></hr>

          <div className="course-row">
            <div className="course-image">
              <img src={class11_logo} style={{ height: 215, width: 215 }} />
            </div>
            <div className="course-description">{class11}</div>
            <div className="syllabus-btn">
              {/* <button onClick={()=>this.showModal()}>Course syllabus</button> */}
            </div>
          </div>

          <hr></hr>
        </section>
      </React.Fragment>
    );
  }
}

export default Resume;
