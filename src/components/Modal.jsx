import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Modal = () => {
  const [isOpen, setOpen] = useState(false);
  useEffect(() => {
    const $body = document.querySelector("body");
    $body.style.overflow = "hidden";
    return () => ($body.style.overflow = "auto");
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Overlay>
      <ModalWrap>
        <Contents>
          <CloseButton onClick={handleClose}>✕</CloseButton>
          <div className="header">
            <h3>포토리뷰</h3>
          </div>
          <div className="photo-container"></div>
        </Contents>
      </ModalWrap>
    </Overlay>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 620px;
  height: fit-content;
  position: absolute;
  border-radius: 16px;
  background-color: #f8f8f8;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CloseButton = styled.div`
  position: absolute;
  right: 20px;
  top: 20px;
  font-size: 25px;
  color: #202020;
  cursor: pointer;
`;

const Contents = styled.div`
  position: relative;
  background-color: white;
  border-radius: 16px;
  letter-spacing: -0.8px;

  .header {
    top: 0;
    padding: 30px 0px;
    border-bottom: 0.3px solid #eaeaea;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, "Apple SD Gothic Neo",
      Pretendard, Roboto, "Noto Sans KR", "Segoe UI", "Malgun Gothic",
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  .photo-container {
    padding: 20px;
    height: 650px;
    overflow: scroll;
  }
`;

export default Modal;
