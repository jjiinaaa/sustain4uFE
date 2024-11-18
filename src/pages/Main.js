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

const Subtitle = styled.p`
  font-family: Pretendard;
  font-weight: 300;
  color: #5c5b5b;
  margin: 0;
  @media screen and (max-width: 767px) {
    font-size: 0.65rem;
    padding-left: 6%;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
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
    background-color: #005bac;

    h2,
    p {
      color: white;
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
`;

const CardSubtitle = styled.p`
  font-size: 0.67rem;
  color: gray;
  margin-top: 1px;
  transition: color 0.3s ease;
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

function Main() {
  return (
    <TotalContainer>
      <Tobbar content='MAIN' />
      <Container>
        <MessageContainer>
          <WelcomeText>Welcome, USER3124</WelcomeText>
          <Subtitle>
            Part-time notification service <br />
            for Inha University international students
          </Subtitle>
        </MessageContainer>

        <Card to='/checklist1'>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>
            Check permitted
            <br />
            Working hours
          </CardTitle>
          <CardSubtitle>근로 허용 시간 확인</CardSubtitle>
        </Card>

        <Card
          onClick={() => console.log("Navigate to Unpermitted Work Categories")}
        >
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>
            Unpermitted
            <br />
            Work Categories
          </CardTitle>
          <CardSubtitle>국제학생 시간제 취업 불허 직종</CardSubtitle>
        </Card>

        <Card onClick={() => console.log("Navigate to Employment Contract")}>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>Employment Contract</CardTitle>
          <CardSubtitle>근로계약서 출력</CardSubtitle>
        </Card>
      </Container>
      <Footer />
    </TotalContainer>
  );
}

export default Main;
