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
    width: 40%;
    height: 82%;
    padding: 0 30%;
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

const ComponentText = styled.h2`
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
  width: 100%;
  gap: 10%;
  margin-bottom: 15px;
`;

const InputBox = styled.div`
  background-color: #ffffff;
  border: 1px solid #dcdcdc;
  border-radius: 8px;
  padding: 10px 15px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  width: 40%;
  padding: 10px 15px;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  color: #5c5b5b;
  background-color: transparent;
  appearance: none; /* 화살표 제거 */
  // placeholder 글이 감춰지도록

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
  border-radius: 50%;
  background-color: ${(props) =>
    props.selected ? "rgba(0, 91, 172, 0.3)" : "#ffffff"};
  border: ${(props) =>
    props.selected ? "2px solid #005bac" : "2px solid #fff"};
  box-sizing: border-box;
  box-shadow: ${(props) =>
    props.selected ? "none" : "0px 0px 10px rgba(0, 0, 0, 0.1)"};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => (props.selected ? "#005bac" : "#5c5b5b")};
  font-weight: 300;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    width: 35px;
    height: 35px;
    font-size: 0.6rem;
    margin: 5px;
  }
  @media screen and (min-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 0.9rem;
    margin: 10px;
  }
`;

const ComponentContainer = styled.div`
  width: 100%;
`;

const Button = styled(Link)`
  background-color: #005bac;
  font-family: Pretendard;
  font-weight: 700;
  color: #f1f1f1;
  border-radius: 100px;
  border: none;
  text-align: center;
  cursor: pointer;
  margin-bottom: 5%;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 13px 0;
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    padding: 10px 0;
    font-size: 1rem;
  }
`;

function WorkingHours() {
  const location = useLocation();
  const navigate = useNavigate();
  const [state, setState] = useState({});
  useEffect(() => {
    if (location.state == null) {
      alert("Please fill out the information first.");
      // 안되면 navigation 사용
      navigate("/main");
    } else {
      setState(location.state); // null or undefined
    }
  }, []);

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

  const toggleDaySelection = async (day) => {
    await setSelectedDays((prev) =>
      prev.includes(day) ? prev.filter((d) => d !== day) : [...prev, day]
    );
  };

  return (
    <TotalContainer>
      <Tobbar content='STANDARD LABOR CONTRACT' />
      <Container>
        <MessageContainer>
          <FirstText>
            Please write <br /> the following information
          </FirstText>
          <SubText>Working Hours</SubText>
        </MessageContainer>
        <ComponentContainer>
          <ComponentText>Term of Labor contract</ComponentText>
        </ComponentContainer>
        <RowContainer>
          <InputBox>
            <Input
              type='date'
              placeholder='Start (DD-MM-YYYY)'
              value={formData.startDate}
              lang='en'
              onChange={(e) => {
                handleInputChange("startDate", e.target.value);
              }}
            />
          </InputBox>
          <InputBox>
            <Input
              type='date'
              placeholder='End (DD-MM-YYYY)'
              value={formData.endDate}
              lang='en'
              onChange={(e) => {
                handleInputChange("endDate", e.target.value);
              }}
            />
          </InputBox>
        </RowContainer>
        <ComponentContainer>
          <ComponentText>
            Time of Labor contract
            <br></br>(Please enter it by the hour.)
          </ComponentText>
        </ComponentContainer>
        <RowContainer>
          <InputBox>
            <Input
              type='time'
              placeholder='Start (00:00)'
              value={formData.startTime}
              step='3600'
              lang='en'
              required
              onChange={(e) => handleInputChange("startTime", e.target.value)}
            />
          </InputBox>
          <InputBox>
            <Input
              type='time'
              placeholder='End (00:00)'
              value={formData.endTime}
              step='3600'
              lang='en'
              required
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
        <Button
          to={"/checkworkinghours"}
          state={{
            ...state,
            workingHoursData: formData,
            selectedDaysData: selectedDays,
          }}
        >
          Go Next
        </Button>
      </Container>
    </TotalContainer>
  );
}

export default WorkingHours;
