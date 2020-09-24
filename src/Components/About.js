import React, { Component } from "react";

import DevImage1 from "../assets/images/dev1.gif";
import book from "../assets/images/book.png";
import computer from "../assets/images/computer.png";
import chat from "../assets/images/chat.png";
import certify from "../assets/images/certify.png";
import file from "../assets/images/file.png";
import profile from "../assets/images/profile.png";

import "../ComponentStyles/about.scss";

class About extends Component {
  render() {
    if (this.props.data) {

      var name = this.props.data.name;
      var profilepic = "images/" + this.props.data.image;

      var bioL1 = this.props.data.bioL1;
      var bioL2 = this.props.data.bioL2;
      var bioL3 = this.props.data.bioL3;

      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
      
    }

    const textStyle = {
      color: "#3575F9",
      fontWeight: "bold",
    };

    return (
      <React.Fragment>
        <section id="about">
          <div className="row" id="about-page">
            <div className="three columns">
              <img
                className="profile-pic"
                src={DevImage1}
                alt="Developer image"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Dario Infotech</h2>
              <p>{bioL1}</p>
              <p>{bioL2}</p>
              <p>{bioL3}</p>
            </div>
          </div>
        </section>
        
        <div className="train-method-div" style={{ backgroundColor: "white" }}>
         
          <div className="train-sub-div1">
            <div className="train-method-item">
              <img src={book} />
              <p style={textStyle}>Theory</p>
            </div>
            <div className="train-method-item">
              <img src={computer} />
              <p style={textStyle}>Practicals</p>
            </div>
            <div className="train-method-item">
              <img src={file} />
              <p style={textStyle}>Assignments</p>
            </div>
          </div>
          
          <div className="train-sub-div2">
            <div className="train-method-item">
              <img src={certify} />
              <p style={textStyle}>Certification</p>
            </div>
            <div className="train-method-item">
              <img src={profile} />
              <p style={textStyle}>Resume Preparation</p>
            </div>
            <div className="train-method-item">
              <img src={chat} />
              <p style={textStyle}>Interview Preparation</p>
            </div>
          </div>
        
        </div>
      </React.Fragment>
    );
  }
}

export default About;
