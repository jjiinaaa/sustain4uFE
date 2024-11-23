import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";
import clock from "../assets/image/clock.svg";
import bag from "../assets/image/bag.svg";
import robot from "../assets/image/robot.svg";
import Arrow from "../assets/image/arrow.svg";

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 767px) {
    width: 82%;
    height: 81%;
    margin-top: 5%;
    padding: 0 9% 5%;
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
  font-weight: 900;
  color: #5c5b5b;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin: 0 0 10px;
    padding-left: 5%;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 15px;
    padding-left: 16%;
  }
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

const Card = styled.div`
  width: 60%;
  background-color: #ffffff;
  padding: 30px 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
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

const Specialcase = () => {
  const navigate = useNavigate();
  return (
    <TotalContainer>
      <Tobbar content='UNPERMITTED WORKS' />
      <Container>
        <MessageContainer>
          <WelcomeText>
            Special Cases for Part-Time <br></br>Employment Authorization
          </WelcomeText>
        </MessageContainer>
        <Card
          onClick={() => {
            navigate("/detailspecialcase1");
          }}
        >
          <QuetionImageBox>
            <QuetionImage src={clock} alt='clock' />
          </QuetionImageBox>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>
            Exemption from part-time employment authorization for temporary or
            routine activities
          </CardTitle>
        </Card>

        <Card
          onClick={() => {
            navigate("/detailspecialcase2");
          }}
        >
          <QuetionImageBox>
            <QuetionImage src={bag} alt='bag' />
          </QuetionImageBox>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>
            Exemption for income-generating research or internship activities of{" "}
            <br></br>
            degree-seeking international students (excluding D-2-5)
          </CardTitle>
        </Card>
        <Card
          onClick={() => {
            navigate("/detailspecialcase3");
          }}
        >
          <QuetionImageBox>
            <QuetionImage src={robot} alt='robot' />
          </QuetionImageBox>
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>
            Exemption for field training activities under the field training
            semester system
          </CardTitle>
        </Card>
      </Container>
    </TotalContainer>
  );
};

export default Specialcase;
