import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";
import CannotJobBG from "../assets/image/cannotJobBG.svg";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 90%;
    height: 95vh;
    padding: 0 5%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 92vh;
    padding: 0 30%;
  }
`;

const Resultcontent = styled.div`
  width: 100%;
  max-width: 370px;
  text-align: left;
  font-family: Pretendard;
  font-weight: 900;
  font-size: 1rem;
  color: #5c5b5b;
  margin: 0 auto 20px;
  padding-left: 5%;
`;

const BGContainer = styled.div`
  width: 370px;
  height: 560px;
  position: relative;
  margin: 0 auto 5%;
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${CannotJobBG});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;
`;

const TimeContent = styled.div`
  position: absolute;
  display: block;
  font-family: Pretendard;
  font-weight: 300;
  color: #5c5b5b;
  font-size: 0.9rem;

  &:nth-child(1) {
    top: 6%;
    left: 8%;
    width: 280px;
  }
  &:nth-child(2) {
    top: 22.5%;
    right: 8%;
    text-align: right;
    width: 260px;
  }
`;

const HighlightedText = styled.span`
  color: #005bac;
  font-weight: 900;
`;

const GoTextLinkBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 0 auto;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    margin: 0 auto;
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

  @media screen and (max-width: 767px) {
    padding: 13px 0;
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    padding: 13px 0;
    font-size: 1rem;
  }
`;

const CannotJob = () => {
  const [userName, setUserName] = useState("USER3142");

  return (
    <>
      <Tobbar content='RESULT' />
      <Container>
        <Resultcontent>{userName}, Here's your result</Resultcontent>
        <BGContainer>
          <Background>
            <TimeContent>
              I’m sorry, but according to your responds
              <HighlightedText> You cannot get your job</HighlightedText>
            </TimeContent>
            <TimeContent>
              Please ask to
              <HighlightedText> Information Center</HighlightedText> if you have
              a question!
            </TimeContent>
          </Background>
        </BGContainer>
        <GoTextLinkBox to={`/main`}>
          <GoTextButton>Back to Main</GoTextButton>
        </GoTextLinkBox>
      </Container>
    </>
  );
};

export default CannotJob;
