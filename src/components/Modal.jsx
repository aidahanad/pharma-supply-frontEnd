import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ModalWrapper = styled.div`
  .modal {
    opacity: 1;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(77, 77, 77, 0.7);
    transition: ease-in 0.9s;
  }

  .modal__content {
    border-radius: 4px;
    position: relative;
    width: 500px;
    max-width: 90%;
    background: #fff;
    padding: 1em 2em;
    text-align: center;
  }

  .modal__close {
    position: absolute;
    top: 10px;
    right: 10px;
    color: #585858;
    text-decoration: none;
  }
`;

const Modal = ({ title, content, onClose }) => {
  return (
    <ModalWrapper>
      <div id="demo-modal" className="modal">
        <div className="modal__content">
          <h1>{title}</h1>
          <p>{content}</p>
          <a href="#" className="modal__close" onClick={onClose}>
            &times;
          </a>
        </div>
      </div>
    </ModalWrapper>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;