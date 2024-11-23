import React, { useEffect, useState } from "react";
import { Tobbar } from "../components/Tobbar";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import clock from "../assets/image/clock.svg";
import bag from "../assets/image/bag.svg";

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
  width: 90%;
  padding-left: 10%;
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

const Card = styled.div`
  width: 70%;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  position: relative;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    margin: 0 0 5%;
    padding: 10px 35px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px 30px;
    margin: 0 0 3%;
  }
`;

const QuetionImageBox = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const QuetionImage = styled.img`
  width: 100%;
  height: 100%;
`;

const CardTitle = styled.h2`
  font-size: 0.9rem;
  font-weight: 300;
  color: #5c5b5b;
  text-align: center;
`;

const HighlightedText = styled.span`
  color: #5c5b5b;
  font-weight: 900;
  font-size: 1.5rem;
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
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 13px 0;
    font-size: 0.75rem;
    margin-top: 10%;
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    padding: 10px 0;
    font-size: 1rem;
    margin-top: 5%;
  }
`;

function CheckWorkingHours() {
  const location = useLocation();
  const [totalWorkedTime, setTotalWorkedTime] = useState(0);
  const [dailyRecessTime, setDailyRecessTime] = useState(0);
  const { state } = location;
  const { workingHoursData, selectedDaysData } = location.state;
  const workingDayOfWeek = selectedDaysData.length;

  useEffect(() => {
    const hoursWorked = calculateWorkingHours(
      workingHoursData.startTime,
      workingHoursData.endTime
    ); // 하루에 일한 시간

    setTotalWorkedTime(hoursWorked * workingDayOfWeek);
  }, [workingHoursData, workingDayOfWeek]);

  const calculateWorkingHours = (startTime, endTime) => {
    const [startHours, startMinutes] = startTime.split(":").map(Number);
    const [endHours, endMinutes] = endTime.split(":").map(Number);

    const startTotalMinutes = startHours * 60 + startMinutes;
    const endTotalMinutes = endHours * 60 + endMinutes;

    const totalMinutesWorked = endTotalMinutes - startTotalMinutes;
    const hoursWorked = Math.floor(totalMinutesWorked / 60); // 분 단위를 제거하고 시간 단위로만 계산

    if (hoursWorked <= 0) {
      return 0;
    }

    if (hoursWorked >= 8) {
      setDailyRecessTime(60);
      return hoursWorked - 1;
    } else if (hoursWorked >= 4) {
      setDailyRecessTime(30);
      return hoursWorked - 0.5;
    } else {
      setDailyRecessTime(0);
      return hoursWorked;
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
          <SubText>Working Hours</SubText>
        </MessageContainer>
        <Card>
          <QuetionImageBox>
            <QuetionImage src={clock} alt='clock' />
          </QuetionImageBox>
          <CardTitle>
            <HighlightedText>{totalWorkedTime}H</HighlightedText>
            <br></br>
            <br></br>This is your total work hour
          </CardTitle>
        </Card>

        <Card>
          <QuetionImageBox>
            <QuetionImage src={bag} alt='bag' />
          </QuetionImageBox>
          <CardTitle>
            <HighlightedText>{dailyRecessTime}M</HighlightedText>
            <br></br>
            <br></br>This is your recess hour per day
          </CardTitle>
        </Card>
        <Button
          to={"/wage"}
          state={{
            ...state,
            totalWorkedTime,
            dailyRecessTime,
          }}
        >
          Go Next
        </Button>
      </Container>
    </TotalContainer>
  );
}

export default CheckWorkingHours;
