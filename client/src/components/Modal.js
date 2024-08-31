//Button for closing feedbackform

import React from 'react';
import './Modal.css'; //Custom rules for the modal window

const Modal = ({ show, onClose, children }) => {
  return (
    <div className={`modal-backdrop ${show ? 'show' : ''}`} onClick={onClose}>
      <div className="modal-content bg-secondary" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;