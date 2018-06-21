import React, { Component } from 'react';
import { animationTime, ModalBg } from './ModalStyles';

class Modal extends Component {
  state = {
    modalClass: ''
  };

  componentDidUpdate(prevProps) {
    const { shouldShowModal } = this.props;
    if (prevProps.shouldShowModal !== shouldShowModal) {
      this.transitionModal(shouldShowModal);
    }
  }

  closeOnBgClick = e => {
    if (!e.target.id || e.target.id !== 'modalBackground') {
      return;
    }
    this.props.closeModal();
  };

  transitionModal = shouldShowModal => {
    this.setState({ modalClass: 'transition' });
    const minUpdateTime = 17;
    if (shouldShowModal) {
      setTimeout(() => this.setState({ modalClass: 'open' }), minUpdateTime);
    } else {
      setTimeout(() => this.setState({ modalClass: '' }), animationTime);
    }
  };

  render() {
    return (
      <ModalBg
        id="modalBackground"
        className={this.state.modalClass}
        onClick={this.closeOnBgClick}
      >
        <div className="modalMain">
          <div className="header">
            <div className="title">Modal Title</div>
            <div className="closeButton" onClick={this.props.closeModal}>X</div>
          </div>
          <div className="body">
            {this.props.children}
          </div>
        </div>
      </ModalBg>
    );
  }
}

export default Modal;
