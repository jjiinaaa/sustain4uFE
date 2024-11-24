import { useEffect, useState } from "react";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";
import Arrow from "../assets/image/arrow.svg";
import { useNavigate } from "react-router-dom";
import pb from "../services/pb";

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
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 70%;
    height: 82%;
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
    padding-left: 6%;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 15px;
    padding-left: 8%;
  }
`;

const Subtitle = styled.p`
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

const Card = styled.div`
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

  &:last-child {
    margin-bottom: 0;
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
  const navigate = useNavigate();
  const [userName, setUserName] = useState("USER3124");

  useEffect(() => {
    const getUserName = async () => {
      const res = pb.authStore.model;
      const name = res.name;
      setUserName(name);
    };
    getUserName();
  }, []);

  return (
    <TotalContainer>
      <Tobbar content='MAIN' deleteMark={true} />
      <Container>
        <MessageContainer>
          <WelcomeText>Welcome, {userName}</WelcomeText>
          <Subtitle>
            Part-time notification service <br />
            for Inha University international students
          </Subtitle>
        </MessageContainer>

        <Card
          onClick={() => {
            navigate("/checklist1");
          }}
        >
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
          onClick={() => {
            navigate("/unpermittedmain");
          }}
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

        <Card
          onClick={() => {
            navigate("/employerinfo");
          }}
        >
          <ArrowIconTurnBox>
            <ArrowIconTurn src={Arrow} alt='go' />
          </ArrowIconTurnBox>
          <CardTitle>Standard Labor Contract</CardTitle>
          <CardSubtitle>표준근로계약서 출력</CardSubtitle>
        </Card>
      </Container>
      <Footer />
    </TotalContainer>
  );
}

export default Main;
