import styled from 'styled-components';

const modalPadding = 20;

export const animationTime = 500;

export const ModalBg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 99999;
  background-color: rgba(0, 0, 0, 0.4);
  display: none;
  transition: all ${animationTime / 1000}s ease-in-out;

  &.transition {
    display: block;
    opacity: 0;
    padding-top: 0;
  }

  &.open {
    display: block;
    opacity: 1;
    padding-top: 50px;
  }

  .modalMain {
    width: 99%;
    max-width: 500px;
    margin: 0 auto;
    background-color: white;
    min-height: 200px;
  }

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    height: 50px;
    border-bottom: 1px solid #999;
  }

  .title {
    padding-left: ${modalPadding}px;
  }

  .closeButton {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    width: 50px;
    color: #999;
  }

  .closeButton:hover {
    cursor: pointer;
    color: #222;
  }

  .body {
    padding: ${modalPadding}px;
  }
`;
