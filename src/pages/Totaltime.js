import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import pb from "../services/pb";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";
import totaltimeBG from "../assets/image/totaltimeBG.svg";

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
    padding: 9% 9%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
    height: 94%;
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
  margin: 0 auto 1%;
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
  background-image: url(${totaltimeBG});
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
  color: #005bac;
  font-weight: 900;
`;

const GoTextLinkBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  margin: 0 auto 20px;

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

const Totaltime = () => {
  const location = useLocation();
  const { prop, result, score } = location.state;
  const [userName, setUserName] = useState("USER3142");
  const [totalTime, setTotalTime] = useState(0);

  useEffect(() => {
    const getUserName = async () => {
      const res = pb.authStore.model;
      const name = res.name;
      setUserName(name);
    };
    getUserName();
  }, []);

  useEffect(() => {
    const timeMapping = {
      "Associate Degree": {
        TOPIK: {
          "Level 3": 25,
          "Level 4": 25,
          "Level 5": 25,
          "Level 6": 25,
          default: 10,
        },
        Sejong: {
          "Level 3": 25,
          "Level 4": 25,
          "Level 5": 25,
          "Level 6": 25,
          default: 10,
        },
        "KIIP Level": {
          "Level 3": 25,
          "Level 4": 25,
          "Level 5": 25,
          default: 10,
        },
        "KIIP Score": { minScore: 61, high: 25, low: 10 },
        default: 10,
      },
      "Undergrade Student: Grade 1-2": {
        TOPIK: {
          "Level 3": 25,
          "Level 4": 25,
          "Level 5": 25,
          "Level 6": 25,
          default: 10,
        },
        Sejong: {
          "Level 3": 25,
          "Level 4": 25,
          "Level 5": 25,
          "Level 6": 25,
          default: 10,
        },
        "KIIP Level": {
          "Level 3": 25,
          "Level 4": 25,
          "Level 5": 25,
          default: 10,
        },
        "KIIP Score": { minScore: 61, high: 25, low: 10 },
        default: 10,
      },
      "Undergrade Student: Grade 3-4": {
        TOPIK: { "Level 4": 30, "Level 5": 30, "Level 6": 30, default: 10 },
        Sejong: { "Level 4": 30, "Level 5": 30, "Level 6": 30, default: 10 },
        "KIIP Level": { "Level 4": 30, "Level 5": 30, default: 10 },
        "KIIP Score": { minScore: 81, high: 30, low: 10 },
        default: 10,
      },
      "Graduate Student": {
        TOPIK: { "Level 4": 35, "Level 5": 35, "Level 6": 35, default: 15 },
        Sejong: { "Level 4": 35, "Level 5": 35, "Level 6": 35, default: 15 },
        "KIIP Level": { "Level 4": 35, "Level 5": 35, default: 15 },
        "KIIP Score": { minScore: 81, high: 35, low: 15 },
        default: 15,
      },
      "D-4": {
        TOPIK: { "Level 1": 10, default: 20 },
        Sejong: { "Level 1": 10, default: 20 },
        "KIIP Level": { "Level 1": 10, default: 20 },
        "KIIP Score": { minScore: 41, high: 20, low: 10 },
        default: 20,
      },
      default: "알수 없음",
    };

    const getTotalTime = (prop, result, score) => {
      const propMapping = timeMapping[prop] || timeMapping.default;
      if (typeof propMapping === "object") {
        const resultMapping = propMapping[result] || propMapping.default;
        if (typeof resultMapping === "object") {
          if (resultMapping.minScore !== undefined) {
            return score >= resultMapping.minScore
              ? resultMapping.high
              : resultMapping.low;
          }
          return resultMapping[score] || resultMapping.default;
        }
        return resultMapping;
      }
      return propMapping;
    };

    setTotalTime(getTotalTime(prop, result, score));
  }, [prop, result, score]);

  return (
    <TotalContainer>
      <Tobbar content='RESULT' />
      <Container>
        <Resultcontent>{userName}, Here's your result</Resultcontent>
        <BGContainer>
          <Background>
            <TimeContent>
              Based on your response, you can work
              <HighlightedText> {totalTime} hours a week.</HighlightedText>
            </TimeContent>
            <TimeContent>
              For more details, please contact the
              <HighlightedText> International Center!</HighlightedText>
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

export default Totaltime;
