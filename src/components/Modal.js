import React, { useEffect } from "react";
import styled from "styled-components";

const Modal = ({ active, setActive, children }) => {
  useEffect(() => {
    document.body.classList.toggle("fix", active);
  }, [active]);
  return (
    <Wrapper>
      <div
        className={`modal ${active ? "active" : ""}`}
        onClick={() => setActive(false)}
      >
        <div
          className={`modal__content ${active ? "active" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  & > div {
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.4);
    transition: 0.3s;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    pointer-events: none;
    z-index: 1111;

    &.active {
      opacity: 1;
      pointer-events: all;
    }

    .modal__content {
      transform: scale(0.5);
      transition: 0.4s all;

      &.active {
        transform: scale(1);
      }
    }
  }
`;

export default Modal;
