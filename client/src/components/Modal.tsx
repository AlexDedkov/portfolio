//Button for closing feedbackform

import React, { ReactNode } from 'react';
import './Modal.css'; // Custom rules for the modal window

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ show, onClose, children }) => {
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
