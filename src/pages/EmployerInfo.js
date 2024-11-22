
import React, { useState } from "react";
import { Tobbar } from "../components/Tobbar";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 82%;
    height: 81%;
    margin-top: 5%;
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 70%;
    height: 82%;
    margin-top: 4%;
    padding: 0 15%;
  }
`;

const MessageContainer = styled.div`
  width: 100%;
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
    font-size: 1rem; /* 모바일에서 작은 텍스트 */
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.2rem; /* 데스크탑에서 약간 큰 텍스트 */
    margin-bottom: 15px;
  }
`;

const SubText = styled.p`
  font-family: Pretendard;
  font-weight: 900;
  color: #005BAC;

  @media screen and (max-width: 767px) {
    font-size: 1rem; 
  }
  @media screen and (min-width: 768px) {
    font-size: 1.2rem; 
  }
`;

const InputBox = styled.div.attrs((props) => ({
    isValid: props.isValid,
  }))`
    flex: 1; 
    width: 100%;
    max-width: 400px; 
    background-color: #ffffff;
    border: ${(props) =>
      props.isValid ? "1px solid #dcdcdc" : "1px solid #ff4d4d"};
    border-radius: 8px;
    padding: 10px 15px;
    margin-bottom: 12px;
    display: flex;
    box-shadow: ${(props) =>
      props.isValid
        ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
        : "0px 4px 8px rgba(255, 0, 0, 0.2)"};
    display: flex;
    align-items: center;
  
    @media screen and (max-width: 767px) {
      max-width: 570px;
      max-height: 20px;
      padding: 8px 12px;
    }
    @media screen and (min-width: 768px) {
      max-width: 800px;
      max-height: 20px;
      padding: 10px 15px;
    }
  `;

const Input = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  font-size: 0.3rem;
  font-family: Pretendard, sans-serif;
  color: #5c5b5b;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    font-size: 0.6rem; 
  }
  @media screen and (min-width: 768px) {
    font-size: 0.8rem; 
  }
`;

const Button = styled.button`
  width: 100%;
  background-color: #005bac;
  font-family: Pretendard;
  font-weight: 700;
  color: #f1f1f1;
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


function EmployerInfo() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    location: "",
    employerName: "",
    identificationNumber: "",
    placeOfEmployment: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    phoneNumber: false,
    location: false,
    employerName: false,
    identificationNumber: false,
    placeOfEmployment: false,
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

  const handleNext = () => {
    navigate('/workinfo');
  };

  return (
    <TotalContainer>
      <Tobbar content="STANDARD LABOR CONTRACT" />
      <Container>
        <MessageContainer>
          <FirstText>Please write <br /> the following information</FirstText>
          <SubText>About Your Employer</SubText>
        </MessageContainer>
        <InputBox isValid={!errors.name}>
          <Input
            type="text"
            placeholder="Name of the enterprise"
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
          />
        </InputBox>
        <InputBox isValid={!errors.phoneNumber}>
          <Input
            type="number"
            placeholder="Phone number (000-0000-0000)"
            value={formData.phoneNumber}
            onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
          />
        </InputBox>
        <InputBox isValid={!errors.location}>
          <Input
            type="text"
            placeholder="Location of the enterprise"
            value={formData.location}
            onChange={(e) => handleInputChange("location", e.target.value)}
          />
        </InputBox>
        <InputBox isValid={!errors.employerName}>
          <Input
            type="text"
            placeholder="Name of the employer (Firstname Lastname)"
            value={formData.employerName}
            onChange={(e) => handleInputChange("employerName", e.target.value)}
          />
        </InputBox>
        <InputBox isValid={!errors.identificationNumber}>
          <Input
            type="text"
            placeholder="Identification number"
            value={formData.identificationNumber}
            onChange={(e) => handleInputChange("identificationNumber", e.target.value)}
          />
        </InputBox>
        <InputBox isValid={!errors.placeOfEmployment}>
          <Input
            type="text"
            placeholder="Place of employment"
            value={formData.placeOfEmployment}
            onChange={(e) => handleInputChange("placeOfEmployment", e.target.value)}
          />
        </InputBox>
        <Button onClick={handleNext}>Go Next</Button>
      </Container>
    </TotalContainer>
  );
};

export default EmployerInfo;