import React, { useState, useEffect } from "react";
import { Tobbar } from "../components/Tobbar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

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

const InputBox = styled.div.attrs((props) => ({
  isValid: props.isValid,
}))`
  flex: 1;
  width: 100%;
  background-color: #ffffff;
  border: ${(props) =>
    props.isValid ? "1px solid #dcdcdc" : "1px solid #ff4d4d"};
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: ${(props) =>
    props.isValid
      ? "0px 4px 8px rgba(0, 0, 0, 0.1)"
      : "0px 4px 8px rgba(255, 0, 0, 0.2)"};
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 80%;
    max-height: 20px;
    padding: 8px 12px;
    margin-bottom: 12px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 768px) {
    width: 90%;
    max-height: 20px;
    padding: 10px 15px;
    margin-bottom: 18px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

const Input = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  outline: none;
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

function WorkInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const [employerFormData, setEmployerFormData] = useState(null);
  useEffect(() => {
    if (location.state == null) {
      alert("Please fill out the information first.");
      // 안되면 navigation 사용
      navigate("/main");
    } else {
      setEmployerFormData(location.state.employerFormData); // null or undefined
    }
  }, []);

  const [formData, setFormData] = useState({
    industry: "",
    businessdescription: "",
    jobdescription: "",
  });

  const [errors, setErrors] = useState({
    industry: false,
    businessdescription: false,
    jobdescription: false,
  });

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
    setErrors({ ...errors, [field]: false });
  };

  return (
    <TotalContainer>
      <Tobbar content='STANDARD LABOR CONTRACT' />
      <Container>
        <MessageContainer>
          <FirstText>
            Please write <br /> the following information
          </FirstText>
          <SubText>
            Description of <br /> Work Information
          </SubText>
        </MessageContainer>
        <InputBox isValid={!errors.industry}>
          <Input
            type='text'
            placeholder='Industry'
            value={formData.industry}
            onChange={(e) => handleInputChange("industry", e.target.value)}
          />
        </InputBox>
        <InputBox isValid={!errors.businessdescription}>
          <Input
            type='text'
            placeholder='Business Description'
            value={formData.businessdescription}
            onChange={(e) =>
              handleInputChange("businessdescription", e.target.value)
            }
          />
        </InputBox>
        <InputBox isValid={!errors.jobdescription}>
          <Input
            type='text'
            placeholder='Job Description'
            value={formData.jobdescription}
            onChange={(e) =>
              handleInputChange("jobdescription", e.target.value)
            }
          />
        </InputBox>
        <Button
          to={"/workinghours"}
          state={{ employerFormData, workInfoData: formData }}
        >
          Go Next
        </Button>
      </Container>
    </TotalContainer>
  );
}

export default WorkInfo;
