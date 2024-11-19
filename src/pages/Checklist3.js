import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tobbar } from "../components/Tobbar";
import notebook from "../assets/image/notebook.svg";
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
`;

const Checklist3 = () => {
  const [statusChange, setStatusChange] = useState("");
  const [colorChange, setColorChange] = useState(0);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);

  useEffect(() => {
    if (statusChange === "cannot-job" || statusChange === "visa") {
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
      setStatusChange("cannot-job");
    } else if (props === "btn2") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive2(true);
      setActive1(false);
      setStatusChange("visa");
    }
  };

  return (
    <TotalContainer>
      <Tobbar content='CHECKBOX' />
      <Progress progressNumber={100} />
      <Container>
        <QuetionLBox>
          <QuetionImageBox>
            <QuetionImage src={notebook} alt='checklist3' />
          </QuetionImageBox>
          <QuetionContent>
            Are you on a student visa to complete your graduation requirements?
          </QuetionContent>
        </QuetionLBox>
        <ButtonContent
          active={active1}
          onClick={(event) => {
            handleButtonActive(event, "btn1");
          }}
          onTouchStart={(event) => {
            handleButtonActive(event, "btn1");
          }}
          onTouchEnd={(event) => {
            handleButtonActive(event, "btn1");
          }}
        >
          Yes, I am.
        </ButtonContent>
        <ButtonContent
          active={active2}
          onClick={(event) => {
            handleButtonActive(event, "btn2");
          }}
          onTouchStart={(event) => {
            handleButtonActive(event, "btn2");
          }}
          onTouchEnd={(event) => {
            handleButtonActive(event, "btn2");
          }}
        >
          No, I'm not.
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
  );
};

export default Checklist3;
