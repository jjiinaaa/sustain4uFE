import { useState, useEffect } from "react";
import styled from "styled-components";
import Arrow from "../assets/image/arrow.svg";

const TobbarContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 9999;
  background-color: #fff;
  font-weight: 900;
  color: #5c5b5b;
  text-align: center;
  @media screen and (max-width: 767px) {
    height: 2.5%;
    padding: 3.5% 0 3%; // 총 높이 : 9%
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    height: 1%;
    padding: 1% 0 2%; // 총 높이 : 4%
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

export const Tobbar = ({ content, deleteMark }) => {
  const [deleteArrow, setDeleteArrow] = useState(false);
  console.log(content, deleteMark);

  function GoBack() {
    window.history.back();
  }

  useEffect(() => {
    if (deleteMark) {
      setDeleteArrow(true);
    }
  }, []);

  return (
    <TobbarContainer>
      {deleteArrow ? (
        ""
      ) : (
        <ArrowIconBox onClick={GoBack}>
          <ArrowIcon src={Arrow} alt='back' />
        </ArrowIconBox>
      )}

      {content}
    </TobbarContainer>
  );
};
