import React, { Component } from "react";
import './card.css';

class Card extends Component {
  render() {
    return (
      <div className="card_containeroke">
        <div class="card">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Avatar"
            style={{ width: "100%" }}
          />
          <div class="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>Architect & Engineer</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
