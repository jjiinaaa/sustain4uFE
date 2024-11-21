import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tobbar } from "../components/Tobbar";
import chat from "../assets/image/chat.svg";
import Progress from "../components/Progress";

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
    height: 81%;
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 84%;
    padding: 0 30%;
  }
`;

const QuetionLBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const QuetionImageBox = styled.div`
  width: 120px;
  height: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto 10%;
`;

const QuetionImage = styled.img`
  width: 100%;
  height: 100%;
`;

const QuetionContent = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 900;
  font-size: 1.1rem;
  color: #5c5b5b;
  margin: 0 auto 40px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ButtonContent = styled.button`
  width: 30%;
  height: 100px;
  margin: 0 auto 10px;
  border: ${(props) =>
    props.active === true ? "1px solid rgba(0, 91, 172, 1)" : "none"};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: ${(props) =>
    props.active === true ? "rgba(0, 91, 172, 0.3)" : "#fff"};
  color: ${(props) => (props.active === true ? "#005bac" : "#5c5b5b")};
  cursor: pointer;

  &:focus,
  &:active {
    background-color: rgba(0, 91, 172, 0.3);
    color: #005bac;
    border: 1px solid rgba(0, 91, 172, 1);
  }
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
  background-color: ${(props) =>
    props.backgroundColor === 1 ? "#005bac" : "#E2E2E2"};
  font-weight: 700;
  color: ${(props) => (props.backgroundColor === 1 ? "#F1F1F1" : "#5C5B5B")};
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

const Sejong = () => {
  const [statusChange, setStatusChange] = useState("");
  const [colorChange, setColorChange] = useState(0);
  const location = useLocation();
  const { prop, result } = location.state;
  const [score, setScore] = useState("");
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  useEffect(() => {
    if (statusChange === "totaltime") {
      setColorChange(1);
    } else {
      setColorChange(0);
    }
  }, [statusChange]);

  const handleButtonActive = (event, props) => {
    if (props === "btn1") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(true);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      setActive6(false);
    } else if (props === "btn2") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(false);
      setActive2(true);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      setActive6(false);
    } else if (props === "btn3") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(false);
      setActive2(false);
      setActive3(true);
      setActive4(false);
      setActive5(false);
      setActive6(false);
    } else if (props === "btn4") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(true);
      setActive5(false);
      setActive6(false);
    } else if (props === "btn5") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(true);
      setActive6(false);
    } else if (props === "btn6") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      setActive6(true);
    }
    setStatusChange("totaltime");
  };

  return (
    <TotalContainer>
      <Tobbar content='KOREAN LEVEL' />
      <Progress progressNumber={100} half='half' />
      <Container>
        <QuetionLBox>
          <QuetionImageBox>
            <QuetionImage src={chat} alt='chat' />
          </QuetionImageBox>
          <QuetionContent>
            Please check your current Sejong Institute Korean Level
          </QuetionContent>
        </QuetionLBox>
        <ButtonBox>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn1");
              setScore("Level 1");
            }}
            active={active1}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn1");
              setScore("Level 1");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn1");
              setScore("Level 1");
            }}
          >
            Elementary 1
          </ButtonContent>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn2");
              setScore("Level 2");
            }}
            active={active2}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn2");
              setScore("Level 2");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn2");
              setScore("Level 2");
            }}
          >
            Elementary 2
          </ButtonContent>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn3");
              setScore("Level 3");
            }}
            active={active3}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn3");
              setScore("Level 3");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn3");
              setScore("Level 3");
            }}
          >
            Intermediate 1
          </ButtonContent>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn4");
              setScore("Level 4");
            }}
            active={active4}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn4");
              setScore("Level 4");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn4");
              setScore("Level 4");
            }}
          >
            Intermediate 2
          </ButtonContent>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn5");
              setScore("Level 5");
            }}
            active={active5}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn5");
              setScore("Level 5");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn5");
              setScore("Level 5");
            }}
          >
            Advanced 1
          </ButtonContent>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn6");
              setScore("Level 6");
            }}
            active={active6}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn6");
              setScore("Level 6");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn6");
              setScore("Level 6");
            }}
          >
            Advanced 2
          </ButtonContent>
        </ButtonBox>
        <GoTextLinkBox to={`/${statusChange}`} state={{ prop, result, score }}>
          <GoTextButton
            backgroundColor={colorChange}
            disabled={statusChange === "" ? 1 : 0}
          >
            Submit
          </GoTextButton>
        </GoTextLinkBox>
      </Container>
    </TotalContainer>
  );
};

export default Sejong;
