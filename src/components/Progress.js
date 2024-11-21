import { useState } from "react";
import styled from "styled-components";
import progressbar33 from "../assets/image/progressbar33.svg";
import progressbar50 from "../assets/image/progressbar50.svg";
import progressbar66 from "../assets/image/progressbar66.svg";
import progressbar100 from "../assets/image/progressbar100.svg";

const Container = styled.div`
  width: 40%;
  height: 4%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 40px auto 0;
`;

const ProgressNum = styled.div`
  width: 100%;
  height: 50%;
  font-weight: 700;
  font-size: 0.75rem;
  color: #5c5b5b;
  text-align: center;
  margin: 0 auto;
`;

const ProgressImageBox = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;

const ProgressImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Progress = ({ progressNumber, half }) => {
  const [progress] = useState(progressNumber);

  return (
    <>
      <Container>
        <ProgressNum>
          {progress === 33
            ? "1 / 3"
            : progress === 50
            ? "1 / 2"
            : progress === 66
            ? "2 / 3"
            : progress === 100 && (half ? "2/2" : "3/3")}
        </ProgressNum>
        <ProgressImageBox>
          <ProgressImage
            src={
              progress === 33
                ? progressbar33
                : progress === 50
                ? progressbar50
                : progress === 66
                ? progressbar66
                : progress === 100 && progressbar100
            }
            alt='progress'
          ></ProgressImage>
        </ProgressImageBox>
      </Container>
    </>
  );
};

export default Progress;
