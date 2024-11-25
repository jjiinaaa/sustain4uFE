import React, { useState, useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";

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
    width: 30%;
    height: 82%;
    padding: 0 35%;
  }
`;

const MessageContainer = styled.div`
  width: 95%;
  padding-left: 5%;
  @media screen and (max-width: 767px) {
    margin: 0 0 6%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 0 3%;
  }
`;

const FirstText = styled.h1`
  font-family: Pretendard;
  font-weight: 900;
  color: #5c5b5b;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 15px;
  }
`;

const SubText = styled.p`
  font-family: Pretendard;
  font-weight: 900;
  color: #005bac;

  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }
`;

const ButtonContent = styled.button`
  width: 90%;
  height: 72px;
  margin: 0 auto 20px;
  border: ${(props) =>
    props.active === true ? "1px solid rgba(0, 91, 172, 1)" : "none"};
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
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

const Button = styled(Link)`
  background-color: #005bac;
  font-weight: 700;
  color: #fff;
  border-radius: 100px;
  border: none;
  text-align: center;
  cursor: pointer;
  padding: 10px 0;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 80%;
    font-size: 0.75rem;
    margin-top: 8%;
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    font-size: 1rem;
    margin-top: 10%;
  }
`;

const Paymentmethods = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [paymentMethodsData, setPaymentMethodsData] = useState("");

  useEffect(() => {
    if (location.state === null) {
      alert("Please enter the previous page first.");
      navigate("/main");
    }
  }, []);

  const handleButtonActive = (event, props) => {
    if (props === "btn1") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive1(true);
      setActive2(false);
      setActive3(false);
      setPaymentMethodsData("In person");
    } else if (props === "btn2") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive2(true);
      setActive1(false);
      setActive3(false);
      setPaymentMethodsData(
        "By direct deposit transfer into the employee's account"
      );
    } else if (props === "btn3") {
      event.stopPropagation(); // 이벤트 버블링 방지
      setActive3(true);
      setActive1(false);
      setActive2(false);
      setPaymentMethodsData("I won’t decide it");
    }
  };

  return (
    <TotalContainer>
      <Tobbar content='STANDARD LABOR CONTRACT' />
      <Container>
        <MessageContainer>
          <FirstText>
            Please write <br /> the following information
          </FirstText>
          <SubText>Payment Methods</SubText>
        </MessageContainer>
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
          In person
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
          By direct deposit transfer <br></br> into the employee's account
        </ButtonContent>
        <ButtonContent
          active={active3}
          onClick={(event) => {
            handleButtonActive(event, "btn3");
          }}
          onTouchStart={(event) => {
            handleButtonActive(event, "btn3");
          }}
          onTouchEnd={(event) => {
            handleButtonActive(event, "btn3");
          }}
        >
          I won’t decide it
        </ButtonContent>
        <Button
          to={`/contract`}
          state={{ ...location.state, paymentMethodsData }}
        >
          Submit
        </Button>
      </Container>
    </TotalContainer>
  );
};

export default Paymentmethods;
