import React from "react";
import "./modal.css";

const Modal = (props) => {
  const closeModal = () => {
    props.close();
  };

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
      <li style={{ fontWeight: "bold" }}>Build a Real App: Burger Builder </li>
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
      <li>
        Society, Law and Ethics
        <ol>
          <li>Cyber Safety</li>
          <li>Approriate usage of social networks</li>
          <li>
            Intellectual property rights,plagiarism, digital rights management
          </li>
          <li>Privacy laws, fraud, cyber-crime- phishing</li>
          <li>Technology and society</li>
        </ol>
      </li>
    </ol>
  );

  let class12_syl = (
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
      <li>
        Society, Law and Ethics
        <ol>
          <li>Cyber Safety</li>
          <li>Approriate usage of social networks</li>
          <li>
            Intellectual property rights,plagiarism, digital rights management
          </li>
          <li>Privacy laws, fraud, cyber-crime- phishing</li>
          <li>Technology and society</li>
        </ol>
      </li>
    </ol>
  );
  let data;
  if (props.data === "py") data = py_syl;
  if (props.data === "web") data = web_syl;
  if (props.data === "react") data = react_syl;
  if (props.data === "py_11") data = class11_syl;
  if (props.data === "py_12") data = class12_syl;
  

  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close" onClick={closeModal}>
          &times;
        </span>
        <h1 style={{ textAlign: "center" }}>Syllabus</h1>
        {data}
      </div>
    </div>
  );
};

export default Modal;
