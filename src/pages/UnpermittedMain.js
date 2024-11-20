import React from "react";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";
import Arrow from "../assets/image/arrow.svg";
import { Link } from "react-router-dom";

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 82%;
    height: 81%;
    margin-top: 5%;
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 70%;
    height: 82%;
    margin-top: 4%;
    padding: 0 15%;
  }
`;

const MessageContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 767px) {
    margin: 0 0 6%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 0 3%;
  }
`;

const WelcomeText = styled.h1`
  font-family: Pretendard;
  font-weight: 900;
  color: #5c5b5b;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin: 0 0 10px;
    padding-left: 6%;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 15px;
    padding-left: 8%;
  }
`;

const Card = styled(Link)`
  width: 80%;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: background-color 0.3s ease;
  position: relative;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    margin: 0 0 5%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 0 2%;
  }

  &:focus,
  &:active {
    border: 1px solid rgba(0, 91, 172, 1);
    background-color: rgba(0, 91, 172, 0.3);

    h2,
    p {
      color: "#005bac";
    }
    div > img {
      filter: invert(100);
    }
  }
`;

const CardTitle = styled.h2`
  font-size: 1rem;
  font-weight: bold;
  color: #5c5b5b;
  transition: color 0.3s ease;
  text-align: center;
`;

const ArrowIconTurnBox = styled.div`
  cursor: pointer;
  position: absolute;
  left: 90%;
  top: 35%;
  width: 13px;
  height: 22px;
  transform: translateY(50%);
`;

const ArrowIconTurn = styled.img`
  width: 70%;
  height: 80%;
  transform: rotate(180deg);
  // 이미지에 후버시에 색 변경을 주고 싶다면 아래와 같이 작성
`;

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  color: #5c5b5b;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 767px) {
    height: 10%;
  }
  @media screen and (min-width: 768px) {
    height: 10%;
  }
`;

const UnpermittedMain = () => {
  return (
    <TotalContainer>
      <Tobbar content='UNPERMITTED WORKS' />
      <Container>
        <MessageContainer>
          <WelcomeText>
            Which information <br></br>
            do you want to know about<br></br>
            Prohibited work fields?
          </WelcomeText>
        </MessageContainer>
        <Card to='/prohibitedfield'>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>
            Prohibited fields of <br></br> work and cases
          </CardTitle>
        </Card>

        <Card to='/exception'>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>
            Exceptions to <br></br>Prohibited Work Fields
          </CardTitle>
        </Card>

        <Card to='/specialcase'>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>
            Special Cases for Part-Time <br></br>Employment Authorization
          </CardTitle>
        </Card>
      </Container>
      <Footer />
    </TotalContainer>
  );
};

export default UnpermittedMain;
