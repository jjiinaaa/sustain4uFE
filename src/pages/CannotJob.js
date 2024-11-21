import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";
import CannotJobBG from "../assets/image/cannotJobBG.svg";

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 82%;
    height: 94%;
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
    height: 84%;
    padding: 0 20%;
  }
`;

const Resultcontent = styled.div`
  width: 100%;
  max-width: 370px;
  text-align: left;
  font-weight: 900;
  font-size: 1rem;
  color: #5c5b5b;
  margin: 10% auto 1%;
  padding: 0 0 0 2vw;
  text-align: left;
`;

const BGContainer = styled.div`
  max-width: 370px;
  width: 100%;
  max-height: 580px;
  min-height: 580px;
  margin: 0 auto 5%;
  position: relative;
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
  font-weight: 300;
  color: #5c5b5b;
  transform: translate(-50%, -50%);

  &:nth-child(1) {
    width: 80%;
    left: 50%;
  }
  &:nth-child(2) {
    text-align: right;
    width: 60%;
    right: -20%;
  }
  @media screen and (max-width: 344px) {
    font-size: 0.6rem;
    &:nth-child(1) {
      top: 21%;
    }
    &:nth-child(2) {
      top: 33%;
    }
  }
  @media screen and (min-width: 345px) and (max-width: 369px) {
    font-size: 0.6rem;
    &:nth-child(1) {
      top: 18%;
    }
    &:nth-child(2) {
      top: 31%;
    }
  }
  @media screen and (min-width: 370px) and (max-width: 399px) {
    font-size: 0.6rem;
    &:nth-child(1) {
      top: 16%;
    }
    &:nth-child(2) {
      top: 30%;
    }
  }
  @media screen and (min-width: 400px) and (max-width: 449px) {
    font-size: 0.7rem;
    &:nth-child(1) {
      top: 13%;
    }
    &:nth-child(2) {
      top: 28%;
    }
  }
  @media screen and (min-width: 450px) {
    font-size: 0.9rem;
    &:nth-child(1) {
      top: 10%;
    }
    &:nth-child(2) {
      top: 26%;
    }
  }
`;

const HighlightedText = styled.span`
  color: ${(props) => (props.color === "red" ? "#ff0000" : "#005bac")};
  font-weight: 900;
`;

const GoTextLinkBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto 20px;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 90%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

const GoTextButton = styled.button`
  width: 100%;
  background-color: #005bac;
  font-weight: 700;
  color: #f1f1f1;
  border-radius: 100px;
  border: none;
  text-align: center;
  cursor: pointer;
  margin: 0 auto;

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
    <TotalContainer>
      <Tobbar content='RESULT' />
      <Container>
        <Resultcontent>{userName}, Here's your result</Resultcontent>
        <BGContainer>
          <Background>
            <TimeContent>
              Unfortunately, based on your response,
              <HighlightedText color='red'>
                {" "}
                you're not eligible for the job
              </HighlightedText>
            </TimeContent>
            <TimeContent>
              For more details about part-time jobs, please contact the
              <HighlightedText color='blue'>
                {" "}
                International Center.
              </HighlightedText>
            </TimeContent>
          </Background>
        </BGContainer>
        <GoTextLinkBox to={`/main`}>
          <GoTextButton>Back to Main</GoTextButton>
        </GoTextLinkBox>
      </Container>
    </TotalContainer>
  );
};

export default CannotJob;
