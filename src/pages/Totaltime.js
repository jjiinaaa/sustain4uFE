import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
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
  font-family: Pretendard;
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
  background-image: url(${totaltimeBG});
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
    if (result === "not score" && prop !== "Graduate Student") {
      setTotalTime(10);
    } else if (
      prop === "Associate Degree" ||
      prop === "Undergrade Student: Grade 1-2"
    ) {
      if (result === "TOPIK" || result === "Sejong") {
        if (
          score === "Level 3" ||
          score === "Level 4" ||
          score === "Level 5" ||
          score === "Level 6"
        ) {
          setTotalTime(25);
        } else {
          setTotalTime(10);
        }
      } else if (result === "KIIP Level") {
        if (score === "Level 3" || score === "Level 4" || score === "Level 5") {
          setTotalTime(25);
        } else {
          setTotalTime(10);
        }
      } else if (result === "KIIP Score") {
        if (score >= 61) {
          setTotalTime(25);
        } else {
          setTotalTime(10);
        }
      } else {
        setTotalTime(10);
      }
    } else if (prop === "Undergrade Student: Grade 3-4") {
      if (result === "TOPIK" || result === "Sejong") {
        if (score === "Level 4" || score === "Level 5" || score === "Level 6") {
          setTotalTime(30);
        } else {
          setTotalTime(10);
        }
      } else if (result === "KIIP Level") {
        if (score === "Level 4" || score === "Level 5") {
          setTotalTime(30);
        } else {
          setTotalTime(10);
        }
      } else if (result === "KIIP Score") {
        if (score >= 81) {
          setTotalTime(30);
        } else {
          setTotalTime(10);
        }
      } else {
        setTotalTime(10);
      }
    } else if (prop === "Graduate Student") {
      if (result === "TOPIK" || result === "Sejong") {
        if (score === "Level 4" || score === "Level 5" || score === "Level 6") {
          setTotalTime(35);
        } else {
          setTotalTime(15);
        }
      } else if (result === "KIIP Level") {
        if (score === "Level 4" || score === "Level 5") {
          setTotalTime(35);
        } else {
          setTotalTime(15);
        }
      } else if (result === "KIIP Score") {
        if (score >= 81) {
          setTotalTime(35);
        } else {
          setTotalTime(15);
        }
      } else {
        setTotalTime(15);
      }
    } else if (prop === "D-4") {
      if (result === "TOPIK" || result === "Sejong") {
        if (score === "Level 1") {
          setTotalTime(10);
        } else {
          setTotalTime(20);
        }
      } else if (result === "KIIP Level") {
        if (score === "Level 1") {
          setTotalTime(10);
        } else {
          setTotalTime(20);
        }
      } else if (result === "KIIP Score") {
        if (score >= 41) {
          setTotalTime(20);
        } else {
          setTotalTime(10);
        }
      } else {
        setTotalTime(20);
      }
    } else {
      setTotalTime("알수 없음");
    }
  }, []);

  return (
    <TotalContainer>
      <Tobbar content='RESULT' />
      <Container>
        <Resultcontent>{userName}, Here's your result</Resultcontent>
        <BGContainer>
          <Background>
            <TimeContent>
              According to your responds, You can work
              <HighlightedText> {totalTime} hours per week</HighlightedText>
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
    </TotalContainer>
  );
};

export default Totaltime;
