import React from "react";
import styled from "styled-components";
import plane from "../assets/image/plane.svg";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SchoolImgBox = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: 768px) {
    width: 180px;
    height: 180px;
  }
`;

const SchoolImg = styled.img`
  width: 100%;
  height: 100%;
`;

const SchoolTitle = styled.h1`
  font-weight: 400;
  font-family: Pretendard;
  color: #5c5b5b;
  text-align: center;
  margin: 0 auto 34px;

  @media screen and (max-width: 767px) {
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const LoginBox = styled.div`
  margin: 0 auto;
  @media screen and (max-width: 767px) {
    width: 72.8%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`;

const LoginButton = styled.button`
  width: 100%;
  background-color: #005bac;
  font-family: Pretendard;
  font-weight: 700;
  color: white;
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

function Start() {
  return (
    <div className='App'>
      <Container>
        <SchoolImgBox>
          <SchoolImg src={plane} alt='INHA UNIVERSITY LOGO' />
        </SchoolImgBox>
        <SchoolTitle>
          JOB SEARCH FOR <br></br> INTERNATIONAL STUDENT
        </SchoolTitle>
        <LoginBox>
          <LoginButton>Continue with Google</LoginButton>
        </LoginBox>
      </Container>
    </div>
  );
}

export default Start;
