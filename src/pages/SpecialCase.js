import React from "react";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";
import { Link } from "react-router-dom";
import clock from "../assets/image/clock.svg";
import bag from "../assets/image/bag.svg";
import robot from "../assets/image/robot.svg";

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

const Card = styled.div`
  width: 80%;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 767px) {
    margin: 0 0 5%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 0 2%;
  }
`;

const QuetionImageBox = styled.div`
  width: 40px;
  height: 40%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const QuetionImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 300;
  color: #5c5b5b;
  text-align: center;
`;

const GoTextLinkBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 50px auto 0;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    margin: 50px auto 0;
  }
`;

const GoTextButton = styled.button`
  width: 100%;
  background-color: #005bac;
  font-family: Pretendard;
  font-weight: 700;
  color: #f1f1f1;
  border-radius: 100px;
  border: none;
  text-align: center;
  cursor: pointer;
  margin-bottom: 5%;

  @media screen and (max-width: 767px) {
    padding: 13px 0;
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    padding: 13px 0;
    font-size: 1rem;
  }
`;

const Specialcase = () => {
  return (
    <TotalContainer>
      <Tobbar content='UNPERMITTED WORKS' />
      <Container>
        <MessageContainer>
          <WelcomeText>
            Special Cases for Part-Time <br></br>Employment Authorization
          </WelcomeText>
        </MessageContainer>
        <Card>
          <QuetionImageBox>
            <QuetionImage src={clock} alt='clock' />
          </QuetionImageBox>
          <CardTitle>
            Exemption from part-time employment authorization for temporary or
            routine activities
          </CardTitle>
        </Card>

        <Card>
          <QuetionImageBox>
            <QuetionImage src={bag} alt='bag' />
          </QuetionImageBox>
          <CardTitle>
            Exemption for income-generating research or internship activities of
            degree-seeking international students (excluding D-2-5)
          </CardTitle>
        </Card>
        <Card>
          <QuetionImageBox>
            <QuetionImage src={robot} alt='robot' />
          </QuetionImageBox>
          <CardTitle>
            Exemption for field training activities under the field training
            semester system
          </CardTitle>
        </Card>
        <GoTextLinkBox to={`/unpermittedmain`}>
          <GoTextButton>I understand</GoTextButton>
        </GoTextLinkBox>
      </Container>
    </TotalContainer>
  );
};

export default Specialcase;
