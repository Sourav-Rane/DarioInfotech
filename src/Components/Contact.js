import React, { Component } from "react";
import whatsapp from "../assets/images/whatsapp.webp";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email_phone: "",
      subject: "",
      message: "",
      loader: false,
    };
  }

  submitForm = () => {
    this.setState({ loader: true });
    if (
      this.state.name !== "" &&
      this.state.email_phone !== "" &&
      this.state.message !== ""
    ) {
      let formData = `Name: ${this.state.name} \n Ph/Email: ${this.state.email_phone} \n Subject: ${this.state.subject} \n Message: ${this.state.message} \n`;
      axios
        .post(
          "https://api.telegram.org/bot1123433589:AAGE5-P-1lS_plYLwWm7LYvhG6OXkbpbbO0/sendmessage",
          {
            chat_id: 487735924,
            text: formData,
            parse_mode: "Markdown",
          }
        )
        .then((res) => {
          this.setState({ loader: false });
          toast.success(
            "Thank you! We have recieved your query. We will get in touch with you shortly. 😃",
            {
              position: "bottom-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: false,
              draggable: false,
              progress: undefined,
            }
          );
          document.getElementById("contactForm").reset();
          this.setState({
            name: "",
            email_phone: "",
            subject: "",
            message: "",
          });
        })
        .catch((err) => {
          console.log(err);
          this.setState({ loader: false });
          toast.error("Oops! Try again please. 🙁", {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
          });
        });
    } else {
      this.setState({ loader: false });
      toast.error("Oops! Please fill in the mandatory* fields 🙁", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
    }
  };
  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    console.log(this.state);

    return (
      <section id="contact">
        <ToastContainer draggable={false} />
        <div className="row section-head">
          <div className="two columns header-col">
            <h1>
              <span>Get In Touch.</span>
            </h1>
          </div>

          <div className="ten columns">
            <p className="lead">{message}</p>
          </div>
        </div>

        <div className="row">
          <div className="eight columns">
            <form action="" method="post" id="contactForm" name="contactForm">
              <fieldset>
                <div>
                  <label htmlFor="contactName">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactName"
                    name="contactName"
                    onChange={(e) => this.setState({ name: e.target.value })}
                    spellcheck="false"
                  />
                </div>

                <div>
                  <label htmlFor="contactEmail">
                    Email / Phone <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactEmail"
                    name="contactEmail"
                    onChange={(e) =>
                      this.setState({ email_phone: e.target.value })
                    }
                    spellcheck="false"
                  />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input
                    type="text"
                    defaultValue=""
                    size="35"
                    id="contactSubject"
                    name="contactSubject"
                    onChange={(e) => this.setState({ subject: e.target.value })}
                    spellcheck="false"
                  />
                </div>

                <div>
                  <label htmlFor="contactMessage">
                    Message <span className="required">*</span>
                  </label>
                  <textarea
                    cols="50"
                    rows="15"
                    id="contactMessage"
                    name="contactMessage"
                    spellcheck="false"
                    onChange={(e) => this.setState({ message: e.target.value })}
                  ></textarea>
                </div>

                <div>
                  <button
                    type="button"
                    className="submit"
                    onClick={this.submitForm}
                  >
                    Submit
                  </button>
                  {this.state.loader ? (
                    <span id="image-loader">
                      <img alt="" src="images/loader.gif" />
                    </span>
                  ) : null}
                </div>
              </fieldset>
            </form>
          </div>

          <aside className="four columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {street} <br />
                {city}, {state} {zip}
                <br />
                <span>
                  <img src={whatsapp} height="20" width="20"></img>
                  &nbsp;&nbsp;&nbsp;{phone}
                </span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
