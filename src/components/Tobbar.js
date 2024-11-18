import React from "react";
import styled from "styled-components";
import Arrow from "../assets/image/arrow.svg";

const TobbarContainer = styled.div`
  width: 100%;
  position: relative;
  font-family: Pretendard;
  font-weight: 900;
  color: #5c5b5b;
  text-align: center;
  @media screen and (max-width: 767px) {
    padding: 1vh 0;
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    padding: 2vh 0;
    font-size: 1.5rem;
  }
`;

const ArrowIconBox = styled.a`
  cursor: pointer;
  position: absolute;
  @media screen and (max-width: 767px) {
    left: 20px;
    top: 50%;
    width: 9px;
    height: 15px;
  }
  @media screen and (min-width: 768px) {
    left: 30px;
    top: 50%;
    width: 13px;
    height: 22px;
  }
`;

const ArrowIcon = styled.img`
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
`;

export const Tobbar = ({ content }) => {
  function GoBack() {
    window.history.back();
  }

  return (
    <TobbarContainer>
      <ArrowIconBox onClick={GoBack}>
        <ArrowIcon src={Arrow} alt='back' />
      </ArrowIconBox>
      {content}
    </TobbarContainer>
  );
};
