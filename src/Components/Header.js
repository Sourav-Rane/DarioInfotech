import React, { Component } from "react";
import ParticlesBg from "particles-bg";

class Header extends Component {
  render() {
    if (this.props.data) {
      var project = this.props.data.project;
      var github = this.props.data.github;
      var name = this.props.data.name;
      var description1 = this.props.data.description1;
      var description2 = this.props.data.description2;
      var description3 = this.props.data.description3;
      var city = this.props.data.address.city;
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <header id="home">
        <ParticlesBg type="polygon" bg={true} />
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#courses">
                Courses
              </a>
            </li>
            {/* <li><a className="smoothscroll" href="#portfolio">Reviews</a></li> */}
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3
              className="tagline"
              style={{ fontWeight: "bold", color: "orange" }}
            >
              {description2}
            </h3>
            <h3 className="tagline">{description1}</h3>

            <hr />
            <h3 className="tagline" style={{ fontWeight: "bold" }}>
              {description3}
            </h3>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
