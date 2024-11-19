import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tobbar } from "../components/Tobbar";
import calendar from "../assets/image/calendar.svg";
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
    height: 83%;
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
  font-family: Pretendard;
  font-weight: 900;
  font-size: 1.1rem;
  color: #5c5b5b;
  margin: 0 auto 40px;
`;

const ButtonContent = styled.button`
  width: 90%;
  height: 92px;
  margin: 0 auto 20px;
  border: ${(props) =>
    props.active === true ? "1px solid rgba(0, 91, 172, 1)" : "none"};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 0.75rem;
  font-family: Pretendard;
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
  font-family: Pretendard;
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

  // CLASS 이름으로 CSS 적용하기
  // .checklist1 {
`;

const Checklist1 = () => {
  const [statusChange, setStatusChange] = useState("");
  const [colorChange, setColorChange] = useState(0);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  useEffect(() => {
    if (statusChange === "cannot-job" || statusChange === "checklist2") {
      setColorChange(1);
    } else {
      setColorChange(0);
    }
  }, [statusChange]);

  const yesHandleButtonClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링 방지 (부모요소로 이벤트 전파 방지)
    setStatusChange("cannot-job");
  };

  const noHandleButtonClick = (event) => {
    event.stopPropagation(); // 이벤트 버블링 방지
    setStatusChange("checklist2");
  };

  const handleButtonActive = (props) => {
    if (props === "btn1") {
      setActive1(true);
      setActive2(false);
      console.log("active1: " + active1 + " active2: " + active2);
    } else if (props === "btn2") {
      setActive2(true);
      setActive1(false);
      console.log("active2: " + active2 + " active1: " + active1);
    }
  };

  return (
    <>
      <TotalContainer>
        <Tobbar content='CHECKBOX' />
        <Progress progressNumber={33} />
        <Container>
          <QuetionLBox>
            <QuetionImageBox>
              <QuetionImage src={calendar} alt='checklist1' />
            </QuetionImageBox>
            <QuetionContent>
              Have you been in Korea for less than six months?
            </QuetionContent>
          </QuetionLBox>
          <ButtonContent
            active={active1}
            onClick={(event) => {
              yesHandleButtonClick(event);
            }}
            onTouchStart={() => {
              handleButtonActive("btn1");
            }}
            onTouchEnd={() => {
              handleButtonActive("btn1");
            }}
          >
            Yes, less than six months
          </ButtonContent>
          <ButtonContent
            active={active2}
            onClick={(event) => {
              noHandleButtonClick(event);
            }}
            onTouchStart={() => {
              handleButtonActive("btn2");
            }}
            onTouchEnd={() => {
              handleButtonActive("btn2");
            }}
          >
            No, more than six months
          </ButtonContent>
          <GoTextLinkBox to={`/${statusChange}`}>
            <GoTextButton
              backgroundColor={colorChange}
              disabled={statusChange === "" ? 1 : 0}
            >
              Go Next
            </GoTextButton>
          </GoTextLinkBox>
        </Container>
      </TotalContainer>
    </>
  );
};

export default Checklist1;
