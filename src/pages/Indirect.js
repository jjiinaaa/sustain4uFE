import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";
import lock from "../assets/image/lock.svg";

const TotalContainer = styled.div`
  width: 100%;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 82%;
    height: 81%;
    padding: 0 9%;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 84%;
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
  margin: 0 auto 5%;
`;

const QuetionImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Subtitle = styled.p`
  font-weight: 300;
  color: #5c5b5b;
  margin: 0 auto 40px;
  text-align: center;
  @media screen and (max-width: 767px) {
    font-size: 0.65rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

const QuetionContent = styled.div`
  width: 100%;
  text-align: center;
  font-weight: 900;
  font-size: 1.1rem;
  color: #5c5b5b;
  margin: 5% auto 20px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: row;
`;

const ButtonContent = styled.div`
  width: 30%;
  height: 150px;
  margin: 0 auto 16px;
  border: none;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-size: 0.75rem;
  font-weight: 500;
  background-color: #fff;
  color: #5c5b5b;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const GoTextLinkBox = styled.button`
  height: 10%;
  background-color: #005bac;
  font-weight: 700;
  color: #f1f1f1;
  border-radius: 100px;
  border: none;
  text-align: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 70%;
    margin: 5% auto;
    padding: 18px 0;
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 2% auto;
    padding: 13px 0;
    font-size: 1rem;
  }
`;

const Indirect = () => {
  const navigate = useNavigate();
  return (
    <TotalContainer>
      <Tobbar content='UNPERMITTED WORKS' />
      <Container>
        <QuetionLBox>
          <QuetionContent>
            These works are prohibited <br></br> while you’re in Korea
          </QuetionContent>
          <QuetionImageBox>
            <QuetionImage src={lock} alt='lock' />
          </QuetionImageBox>
          <Subtitle>
            If you have any questions about this criteria, <br></br> Click those
            square icon below and check information
          </Subtitle>
        </QuetionLBox>
        <ButtonBox>
          <ButtonContent>
            Delivery <br></br>drivers
          </ButtonContent>
          <ButtonContent>
            Courier<br></br>serviceriders
          </ButtonContent>
          <ButtonContent>
            Substitute<br></br>drivers
          </ButtonContent>
          <ButtonContent>
            Insurance <br></br>agents
          </ButtonContent>
          <ButtonContent>Private tutors</ButtonContent>
          <ButtonContent>Door-to-door salespersons</ButtonContent>
        </ButtonBox>
        <GoTextLinkBox
          onClick={() => {
            navigate("/unpermittedmain");
          }}
        >
          I understand
        </GoTextLinkBox>
      </Container>
    </TotalContainer>
  );
};

export default Indirect;
