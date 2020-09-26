import React from "react";
import './modal.css';

const Modal = (props) => {
  return (
    <div id="myModal" class="modal">
      <div class="modal-content">
        <span class="close">&times;</span>
        <h1 style={{textAlign:'center'}}>Syllabus</h1>
        {props.data}
      </div>
    </div>
  );
};



export default Modal;
