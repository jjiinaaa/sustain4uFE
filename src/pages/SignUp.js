import React, { useState } from "react";
import styled from "styled-components";
import plane from "../assets/image/plane.svg";
import { useNavigate } from 'react-router-dom';
import pb from "../services/pb";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f8f8f8;
  padding: 0 16px;

  @media screen and (max-width: 767px) {
    padding: 0 8px;
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

const InputBox = styled.div.attrs((props) => ({
  isValid: props.isValid,
}))`
  width: 100%;
  max-width: 350px;
  background-color: #ffffff;
  border: ${(props) =>
    props.isValid ? "1px solid #dcdcdc" : "1px solid #ff4d4d"};
  border-radius: 8px;
  padding: 10px 15px;
  margin-bottom: 15px;
  box-shadow: ${(props) =>
    props.isValid
      ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
      : "0px 4px 8px rgba(255, 0, 0, 0.2)"};
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    max-width: 300px;
    padding: 8px 12px;
  }
`;


const Input = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
  font-size: 0.5rem;
  font-family: Pretendard, sans-serif;
  color: #5c5b5b;
  background-color: transparent;

  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
`;

const ErrorMessage = styled.span.attrs((props) => ({
  isVisible: props.isVisible,
}))`
  font-size: 0.7rem;
  color: #ff0000;
  margin-left: 10px;
  display: ${(props) => (props.isVisible ? "block" : "none")};
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
    max-width: 300px;
    font-size: 0.9rem;
    padding: 12px 0;
  }
`;

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    birthDate: "",
  });
  const [errors, setErrors] = useState({
    name: false,
    address: false,
    birthDate: false,
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]+$/; 
    const newErrors = {
      name: formData.name.trim() === "" || !nameRegex.test(formData.name), 
      address: formData.address.trim() === "",
      birthDate: !/^\d{2}-\d{2}-\d{4}$/.test(formData.birthDate),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };
  

  const handleSubmit = async () => {
    if (validateForm()) {
      try {
        const currentUser = pb.authStore.model;
        const email = currentUser?.email;

        if (!email) {
          console.error("User email not found.");
          return;
        }

        const data = {
          email: email, 
          name: formData.name,
          address: formData.address,
          birth: formData.birthDate,
        };

        const record = await pb.collection("users").update(currentUser.id, data);
        console.log("User information updated:", record);
        navigate('/main');
      } catch (error) {
        console.error("Error saving user data:", error);
      }
    } else {
      console.log("Form has errors");
    }
  };

  return (
    <Container>
      <SchoolImgBox>
        <SchoolImg src={plane} alt="Airplane" />
      </SchoolImgBox>
      <Title>
        JOB SEARCH FOR
        <br />
        INTERNATIONAL STUDENT
      </Title>
      <InputBox isValid={!errors.name}>
        <Input
          type="text"
          placeholder="Name (Firstname Lastname)"
          value={formData.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <ErrorMessage isVisible={errors.name}>Invalid form</ErrorMessage>
      </InputBox>
      <InputBox isValid={!errors.address}>
        <Input
          type="text"
          placeholder="Address (Home Country)"
          value={formData.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
        />
        <ErrorMessage isVisible={errors.address}>Invalid form</ErrorMessage>
      </InputBox>
      <InputBox isValid={!errors.birthDate}>
        <Input
          type="text"
          placeholder="Birth Date (DD-MM-YYYY)"
          value={formData.birthDate}
          onChange={(e) => handleInputChange("birthDate", e.target.value)}
        />
        <ErrorMessage isVisible={errors.birthDate}>Invalid form</ErrorMessage>
      </InputBox>
      <Button onClick={handleSubmit}>Sign Up</Button>
    </Container>
  );
}

export default Signup;
