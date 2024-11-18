import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tobbar } from "../components/Tobbar";
import chat from "../assets/image/chat.svg";
import Progress from "../components/Progress";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 82%;
    height: 86vh;
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 92vh;
    padding: 0 30%;
  }
`;

const QuetionLBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const QuetionImageBox = styled.div`
  width: 120px;
  height: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto 10%;
`;

const QuetionImage = styled.img`
  width: 100%;
  height: 100%;
`;

const QuetionContent = styled.div`
  width: 100%;
  text-align: center;
  font-family: Pretendard;
  font-weight: 900;
  font-size: 1.1rem;
  color: #5c5b5b;
  margin: 0 auto 40px;
`;

const InputScore = styled.input`
  width: 90%;
  height: 40px;
  margin: 0 auto 10px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 0.75rem;
  font-family: Pretendard;
  font-weight: 500;
  background-color: #fff;
  color: #5c5b5b;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0 20px;

  &:focus,
  &:hover,
  &:active {
    border: 1px solid #005bac;
    outline: none;
  }
`;

const GoTextLinkBox = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 90%;
    margin: 50px auto 0;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    margin: 50px auto 0;
  }
`;

const GoTextButton = styled.button`
  width: 100%;
  background-color: ${(props) =>
    props.backgroundColor === 1 ? "#005bac" : "#E2E2E2"};
  font-family: Pretendard;
  font-weight: 700;
  color: ${(props) => (props.backgroundColor === 1 ? "#F1F1F1" : "#5C5B5B")};
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

const Kiipscore = () => {
  const [colorChange, setColorChange] = useState(0);
  const location = useLocation();
  const { prop, result } = location.state;
  const [score, setScore] = useState("");

  useEffect(() => {
    if (score === "") {
      setColorChange(0);
    } else if (score >= 0 && score <= 100) {
      setColorChange(1);
    } else {
      setColorChange(0);
    }
  }, [score]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setScore(value);
    if (value === "") {
      setColorChange(0);
    }
  };

  return (
    <>
      <Tobbar content='KOREAN LEVEL' />
      <Progress progressNumber={100} half='half' />
      <Container>
        <QuetionLBox>
          <QuetionImageBox>
            <QuetionImage src={chat} alt='chat' />
          </QuetionImageBox>
          <QuetionContent>
            Please write your current KIIP Level Test score
          </QuetionContent>
        </QuetionLBox>
        <InputScore
          type='number'
          value={score}
          onChange={handleInputChange}
          placeholder='Write here (0~100)'
        />
        <GoTextLinkBox to='/totaltime' state={{ prop, result, score }}>
          <GoTextButton
            backgroundColor={colorChange}
            disabled={colorChange === 0 ? true : false}
          >
            Submit
          </GoTextButton>
        </GoTextLinkBox>
      </Container>
    </>
  );
};

export default Kiipscore;
