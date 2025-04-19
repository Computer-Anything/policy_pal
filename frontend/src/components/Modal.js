import React from 'react';
import '../styles/Modal.css';


// Modal component to display messages or forms
const Modal = ({ isOpen, onClose, children }) => {
  // Prevent scrolling when the modal is open
  if (!isOpen) return null;


  // Render the modal
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
