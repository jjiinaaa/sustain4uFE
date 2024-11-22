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
    margin: 0 0 3%;
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
const RowContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px; 
  width: 100%; 
  margin-bottom: 15px;
`;

const InputBox = styled.div`
  flex: 1; 
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  @media screen and (max-width: 767px) {
    max-width: 250px;
    padding: 8px 12px;
  }
  @media screen and (min-width: 768px) {
    max-width: 600px;
    padding: 10px 15px;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-family: Pretendard, sans-serif;
  font-size: 0.8rem;
  color: #5c5b5b;
  background-color: transparent;
  appearance: none; /* 화살표 제거 */

  @media screen and (max-width: 767px) {
    font-size: 0.6rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.8rem; 
  }
`;

const DayContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5%;

`;

const DayCircle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected ? "rgba(0, 91, 172, 0.3)" : "#ffffff"}; 
  border: ${(props) => (props.selected ? "2px solid #005bac" : "none")}; 
  box-shadow: ${(props) =>
    props.selected
      ? "none"
      : "0px 4px 8px rgba(0, 0, 0, 0.1)"}; 
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.selected ? "#005bac" : "#5c5b5b")}; 
  font-family: Pretendard, sans-serif; 
  font-weight: 300;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 40px;
    height: 40px;
    font-size: 0.6rem; 
    margin: 5px;
  }
  @media screen and (min-width: 768px) {
    width: 45px;
    height: 45px;
    font-size: 0.9rem;
    margin: 20px;
  }

  &:hover {
    background-color: ${(props) =>
      props.selected ? "rgba(0, 91, 172, 0.4)" : "#e0e0e0"}; 
    color: ${(props) => (props.selected ? "#005bac" : "#5c5b5b")}; 
  }
`;

const ComponentContainer = styled.div`
  width: 100%;
`;

const ComponentText = styled.h1`
  font-family: Pretendard, sans-serif;
  font-weight: 300;
  color: #5c5b5b;

  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
    margin-bottom: 10px;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 15px;
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

function WorkingHours() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
  });
  const [selectedDays, setSelectedDays] = useState([]);

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const toggleDaySelection = (day) => {
    setSelectedDays((prev) =>
      prev.includes(day)
        ? prev.filter((d) => d !== day)
        : [...prev, day]
    );
  };

  const handleNext = () => {
    //navigate('/');
  };

  return (
    <TotalContainer>
      <Tobbar content="STANDARD LABOR CONTRACT" />
        <Container>
          <MessageContainer>
            <FirstText>Please write <br /> the following information</FirstText>
            <SubText>Working Hours</SubText>
          </MessageContainer>
        <ComponentContainer>
          <ComponentText>Term of Labor contract</ComponentText>
        </ComponentContainer>
        <RowContainer>
          <InputBox>
            <Input
              type="number"
              placeholder="Start (DD-MM-YYYY)"
              value={formData.startDate}
              onChange={(e) => handleInputChange("startDate", e.target.value)}
            />
          </InputBox>
          <InputBox>
            <Input
              type="number"
              placeholder="End (DD-MM-YYYY)"
              value={formData.endDate}
              onChange={(e) => handleInputChange("endDate", e.target.value)}
            />
          </InputBox>
        </RowContainer>
        <ComponentContainer>
          <ComponentText>Time of Labor contract</ComponentText>
        </ComponentContainer>
        <RowContainer>
          <InputBox>
            <Input
              type="number"
              placeholder="Start (00:00)"
              value={formData.startTime}
              onChange={(e) => handleInputChange("startTime", e.target.value)}
            />
          </InputBox>
          <InputBox>
            <Input
              type="number"
              placeholder="End (00:00)"
              value={formData.endTime}
              onChange={(e) => handleInputChange("endTime", e.target.value)}
            />
          </InputBox>
        </RowContainer>
        <ComponentContainer>
          <ComponentText>Working Day of The week</ComponentText>
        </ComponentContainer>
        <DayContainer>
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <DayCircle
              key={day}
              selected={selectedDays.includes(day)}
              onClick={() => toggleDaySelection(day)}
            >
              {day}
            </DayCircle>
          ))}
        </DayContainer>
        <Button onClick={handleNext}>Check total  work &  Daily recess hours</Button>
        <Button onClick={() => console.log("Cancel clicked")}>Go Next</Button>
      </Container>
    </TotalContainer>
  );
}

export default WorkingHours;