import React, { Component } from 'react';
import Modal from './Modal';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  state = {
    shouldShowModal: false
  };

  closeModal = () => {
    this.setState({ shouldShowModal: false });
  };

  openModal = () => {
    this.setState({ shouldShowModal: true });
  };

  render() {
    return (
      <React.Fragment>
        <Modal
          closeModal={this.closeModal}
          shouldShowModal={this.state.shouldShowModal}
          title="React Vegas Modal"
        >
          This is some modal text
        </Modal>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.openModal}>OPEN MODAL</button>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
