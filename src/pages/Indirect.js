import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tobbar } from "../components/Tobbar";
import lock from "../assets/image/lock.svg";

const TotalContainer = styled.div`
  width: 100%;
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
  margin: 0 auto 5%;
`;

const QuetionImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Subtitle = styled.p`
  font-family: Pretendard;
  font-weight: 300;
  color: #5c5b5b;
  margin: 0 auto 40px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 0.65rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const QuetionContent = styled.div`
  width: 100%;
  text-align: center;
  font-family: Pretendard;
  font-weight: 900;
  font-size: 1.1rem;
  color: #5c5b5b;
  margin: 5% auto 20px;
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
  height: 150px;
  margin: 0 auto 16px;
  border: ${(props) =>
    props.active === true ? "1px solid rgba(0, 91, 172, 1)" : "none"};
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
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

const Indirect = () => {
  const [statusChange, setStatusChange] = useState("");
  const [colorChange, setColorChange] = useState(0);
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);
  const [active5, setActive5] = useState(false);
  const [active6, setActive6] = useState(false);

  useEffect(() => {
    if (statusChange === "unpermittedmain") {
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
      setStatusChange("unpermittedmain");
    } else if (props === "btn2") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(false);
      setActive2(true);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      setActive6(false);
      setStatusChange("unpermittedmain");
    } else if (props === "btn3") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(false);
      setActive2(false);
      setActive3(true);
      setActive4(false);
      setActive5(false);
      setActive6(false);
      setStatusChange("unpermittedmain");
    } else if (props === "btn4") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(true);
      setActive5(false);
      setActive6(false);
      setStatusChange("unpermittedmain");
    } else if (props === "btn5") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(true);
      setActive6(false);
      setStatusChange("unpermittedmain");
    } else if (props === "btn6") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(false);
      setActive2(false);
      setActive3(false);
      setActive4(false);
      setActive5(false);
      setActive6(true);
      setStatusChange("unpermittedmain");
    }
  };

  return (
    <TotalContainer>
      <Tobbar content='UNPERMITTED WORKS' />
      <Container>
        <QuetionLBox>
          <QuetionContent>
            These works are prohibited <br></br> while you’re in Korea
          </QuetionContent>
          <QuetionImageBox>
            <QuetionImage src={lock} alt='lock' />
          </QuetionImageBox>
          <Subtitle>
            If you have any questions about this criteria, <br></br> Click those
            square icon below and check information
          </Subtitle>
        </QuetionLBox>
        <ButtonBox>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn1");
            }}
            active={active1}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn1");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn1");
            }}
          >
            Delivery <br></br>drivers
          </ButtonContent>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn2");
            }}
            active={active2}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn2");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn2");
            }}
          >
            Courier<br></br>serviceriders
          </ButtonContent>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn3");
            }}
            active={active3}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn3");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn3");
            }}
          >
            Substitute<br></br>drivers
          </ButtonContent>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn4");
            }}
            active={active4}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn4");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn4");
            }}
          >
            Insurance <br></br>agents
          </ButtonContent>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn5");
            }}
            active={active5}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn5");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn5");
            }}
          >
            Private tutors
          </ButtonContent>
          <ButtonContent
            onClick={(event) => {
              handleButtonActive(event, "btn6");
            }}
            active={active6}
            onTouchStart={(event) => {
              handleButtonActive(event, "btn6");
            }}
            onTouchEnd={(event) => {
              handleButtonActive(event, "btn6");
            }}
          >
            Door-to-door salespersons
          </ButtonContent>
        </ButtonBox>
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

export default Indirect;
