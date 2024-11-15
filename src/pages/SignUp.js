import React from "react";
import styled from "styled-components";
import Arrow from "../assets/image/arrow.svg";

const Tobbar = styled.div`
  width: 100%;
  position: relative;
  font-family: Pretendard;
  font-weight: 900;
  color: #5c5b5b;
  text-align: center;
  @media screen and (max-width: 767px) {
    padding: 1vh 0;
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    padding: 2vh 0;
    font-size: 1.5rem;
  }
`;

const ArrowIconBox = styled.div`
  cursor: pointer;
  position: absolute;
  @media screen and (max-width: 767px) {
    left: 20px;
    top: 50%;
    width: 9px;
    height: 15px;
  }
  @media screen and (min-width: 768px) {
    left: 30px;
    top: 50%;
    width: 13px;
    height: 22px;
  }
`;

const ArrowIcon = styled.img`
  width: 100%;
  height: 100%;
  transform: translateY(-50%);
`;

const Container = styled.div`
  height: 96vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 82%;
    height: 95vh;
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 92vh;
    padding: 0 30%;
  }
`;

const AccountContatiner = styled.div`
  width: 100%;
  @media screen and (max-width: 767px) {
    margin: 44px 0 72px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px;
    height: 35%;
  }
`;

const AccountTitle = styled.h2`
  font-family: Pretendard;
  font-weight: 900;
  color: #5c5b5b;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin: 0 0 18px;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 34px;
  }
`;

const AccountText = styled.p`
  font-family: Pretendard;
  font-weight: 300;
  color: #5c5b5b;
  margin: 0;
  @media screen and (max-width: 767px) {
    font-size: 0.6rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

const InformationContainer = styled.div`
  width: 100%;
  flex-direction: column;
  @media screen and (max-width: 767px) {
    height: 80%;
  }
  @media screen and (min-width: 768px) {
    height: 65%;
  }
`;

const InformationTitle = styled.div`
  font-family: Pretendard;
  font-size: 1rem;
  font-weight: 900;
  color: #5c5b5b;
  text-align: left;
  @media screen and (max-width: 767px) {
    font-size: 1rem;
    margin: 0 0 20px;
    & + div {
      margin-bottom: 18px;
    }
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
    margin: 0 0 34px;
    & + div {
      margin-bottom: 34px;
    }
  }

  // 다음에 있는 태그에 스타일 적용
`;

const InputBox = styled.div`
  background-color: #e2e2e2;
  border-radius: 8px;
  margin: 0 auto;
  width: 100%;
`;

const Input = styled.input`
  width: 90%;
  background-color: transparent;
  color: #5c5b5b;
  font-family: Pretendard;
  font-weight: 300;
  border: none;
  padding: 0 5%;
  outline: none;
  @media screen and (max-width: 767px) {
    height: 38px;
    font-size: 0.6rem;
  }
  @media screen and (min-width: 768px) {
    height: 50px;
    font-size: 0.8rem;
  }
`;

const SignInBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 98%;
    margin: 256px auto 0;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    margin: 200px auto 0;
  }
`;

const SignInButton = styled.button`
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

function SignUp() {
  return (
    <div className='App'>
      <Tobbar>
        <ArrowIconBox>
          <ArrowIcon src={Arrow} alt='back' />
        </ArrowIconBox>
        SIGN UP
      </Tobbar>
      <Container>
        <AccountContatiner>
          <AccountTitle>Create An Account</AccountTitle>
          <AccountText>
            To know your qualifications for part-time job in Korea, Enter your
            information here
          </AccountText>
        </AccountContatiner>
        <InformationContainer>
          <InformationTitle>Your Information</InformationTitle>
          <InputBox>
            <Input placeholder='Address (Home Country)' />
          </InputBox>
          <InputBox>
            <Input placeholder='Birth Date (0000-00-00)' />
          </InputBox>
          <SignInBox>
            <SignInButton>Sign In</SignInButton>
          </SignInBox>
        </InformationContainer>
      </Container>
    </div>
  );
}

export default SignUp;
