
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
    font-size: 1rem;
    margin-bottom: 5px;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 10px;
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
  max-width: 400px; 
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
  margin-top: 60px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #003d7a;
  }

  @media screen and (max-width: 767px) {
    max-width: 300px;
    font-size: 0.9rem;
    padding: 12px 0;
  }
  @media screen and (min-width: 768px) {
    max-width: 350px;
    font-size: 1.1rem; 
    padding: 15px 0;
  }
`;


function WorkInfo() {
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
      navigate('/workinghours');
    };

    return (
      <TotalContainer>
        <Tobbar content="STANDARD LABOR CONTRACT" />
        <Container>
          <MessageContainer>
            <FirstText>Please write <br /> the following information</FirstText>
            <SubText>Description of <br /> Work Information</SubText>
          </MessageContainer>
          <InputBox isValid={!errors.Industry}>
            <Input
              type="text"
              placeholder="Industry"
              value={formData.Industry}
              onChange={(e) => handleInputChange("Industry", e.target.value)}
            />
          </InputBox>
          <InputBox isValid={!errors.Businessdescription}>
            <Input
              type="text"
              placeholder="Business Description"
              value={formData.Businessdescription}
              onChange={(e) => handleInputChange("Businessdescription", e.target.value)}
            />
          </InputBox>
          <InputBox isValid={!errors.Jobdescription}>
            <Input
              type="text"
              placeholder="Job Description"
              value={formData.Jobdescription}
              onChange={(e) => handleInputChange("Jobdescription", e.target.value)}
            />
          </InputBox>
          <Button onClick={handleNext}>Go Next</Button>
        </Container>
      </TotalContainer>
    );
};

export default WorkInfo;