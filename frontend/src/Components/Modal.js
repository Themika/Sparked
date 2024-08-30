import React from "react";
import "../Styles/Component Styles/modal.css";

const Modal = ({ isOpen, selectedEventDate, closeModal }) => {
  if (!isOpen) return null;

  // Example fake event data
  const fakeEventData = {
    title: "Tech Conference 2024",//Required
    guests: ["John Doe", "Jane Smith"], //Conditional if there is any
    date: "January 1, 2023",//Required
    description: `Join us for an exciting tech conference where industry leaders discuss the latest trends in technology.
      Topics include AI, blockchain, and more.`,//Required
    image: "https://via.placeholder.com/150",//Required
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="image-container"></div>
        <div className="event-info">
          <div className="event-info-header">
            <h2>{fakeEventData.title}</h2>
            <p className="event-info-date">Date: {fakeEventData.date}</p>
          </div>
          <p className="event-info-guest">Guests: John Doe, Jane Smith</p>
        </div>
        <div className="description">
          <h2>Event Description</h2>
          <p>{fakeEventData.description}</p>
        </div>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
