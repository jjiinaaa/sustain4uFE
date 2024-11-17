import React from "react";
import styled from "styled-components";
import plane from "../assets/image/plane.svg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 0 16px;

  @media screen and (max-width: 767px) {
    padding: 0 8px; /* 모바일에서 양쪽 여백 조정 */
  }
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

const Title = styled.h1`
  font-weight: 400;
  font-family: Pretendard;
  color: #5c5b5b;
  text-align: center;
  margin: 0 auto 20px;

  @media screen and (max-width: 767px) {
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

const InputBox = styled.div`
  width: 100%;
  max-width: 350px;
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 767px) {
    max-width: 300px; /* 모바일에서 최대 너비 축소 */
    padding: 8px 12px;
  }
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  font-size: 0.5rem;
  font-family: Pretendard, sans-serif;
  color: #5c5b5b;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    font-size: 0.7rem; /* 모바일에서 폰트 크기 축소 */
  }
`;

const Button = styled.button`
  width: 100%;
  max-width: 350px;
  background-color: #005bac;
  color: #ffffff;
  font-size: 1rem;
  font-family: Pretendard, sans-serif;
  font-weight: bold;
  padding: 15px 0;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  text-align: center;
  margin-top: 20px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003d7a;
  }

  @media screen and (max-width: 767px) {
    max-width: 300px; /* 모바일에서 버튼 너비 축소 */
    font-size: 0.9rem; /* 폰트 크기 축소 */
    padding: 12px 0;
  }
`;

function Signup() {
  return (
    <Container>
      <SchoolImgBox>
        <SchoolImg src={plane} alt="Airplane" />
      </SchoolImgBox>
      <Title>
        JOB SEARCH FOR<br></br>
        INTERNATIONAL STUDENT
      </Title>
      <InputBox>
        <Input type="text" placeholder="Address (Home Country)" />
      </InputBox>
      <InputBox>
        <Input type="text" placeholder="Birth Date (00-00-0000)" />
      </InputBox>
      <Button>Sign with Google</Button>
    </Container>
  );
}

export default Signup;
