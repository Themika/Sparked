import React from "react";
import "../Styles/Component Styles/modal.css";

const Modal = ({ isOpen, selectedEventDate, closeModal }) => {
  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="image-container">
            {/* Image goes here */}
        </div>
        <div className="event-info">
          <p>Date: {selectedEventDate}</p>
          <p>Guests: <span>Guest 1</span></p>
        </div>
        <div className="description">
          <h2>Event Description: </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit amet
            sollicitudin ipsum. Integer at lacus vitae felis sodales tincidunt.
          </p>
        </div>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
