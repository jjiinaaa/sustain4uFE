import React from 'react';
import styled from 'styled-components';
import Arrow from '../assets/image/arrow.svg';

export default Main;

// Styled Components
const Tobbar = styled.div`
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

const ArrowIconBox = styled.div`
  cursor: pointer;
  position: absolute;
  left: 20px;
  top: 60%;
  width: 13px;
  height: 22px;
  transform: translateY(-50%);
`;

const ArrowIcon = styled.img`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  width: 80%;
  height: 96vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 82%;
    height: 95vh;
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 92vh;
    padding: 0 30%;
  }
`;

const MessageContainer = styled.div`
  width: 100%;
  @media screen and (max-width: 767px) {
    margin: 44px 0 10px;
  }
  @media screen and (min-width: 768px) {
    margin: 40px 0 5px;
  }
`;

const WelcomeText = styled.h1`
  font-family: Pretendard;
  font-weight: 900;
  color: #5c5b5b;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin: 0 0 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
    margin: 0 0 15px;
  }
`;

const Subtitle = styled.p`
  font-family: Pretendard;
  font-weight: 300;
  color: #5c5b5b;
  margin: 0;
  @media screen and (max-width: 767px) {
    font-size: 0.65rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.9rem;
    margin: 0 0 10px;
  }
`;

const Card = styled.div`
  width: 80%;
  max-width: 400px;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: background-color 0.3s ease;
  position: relative;
  
  &:hover {
    background-color: #005bac;

    h2, p {
      color: white;
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
`;

const Footer = styled.footer`
  width: 100%;
  background-color: #ffffff;
  color: #5c5b5b;
  padding: 40px 0;
  position: fixed;
  bottom: 0;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
`;


function Main() {
  return (
    <div className='App'>
      <Tobbar>
        <ArrowIconBox>
          <ArrowIcon src={Arrow} alt='back' />
        </ArrowIconBox>
        MAIN
      </Tobbar>
      <Container>
        <MessageContainer>
          <WelcomeText>Welcome, USER3124</WelcomeText>
          <Subtitle>
            Part-time notification service <br />
            for Inha University international students
          </Subtitle>
        </MessageContainer>

        <Card onClick={() => console.log('Navigate to Check permitted working hours')}>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>
            Check permitted<br />
            Working hours
          </CardTitle>
          <CardSubtitle>근로 허용 시간 확인</CardSubtitle>
        </Card>

        <Card onClick={() => console.log('Navigate to Unpermitted Work Categories')}>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>
            Unpermitted<br />
            Work Categories
          </CardTitle>
          <CardSubtitle>국제학생 시간제 취업 불허 직종</CardSubtitle>
        </Card>

        <Card onClick={() => console.log('Navigate to Employment Contract')}>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>Employment Contract</CardTitle>
          <CardSubtitle>근로계약서 출력</CardSubtitle>
        </Card>
      </Container>
      <Footer>
      </Footer>
    </div>
  );
}
  