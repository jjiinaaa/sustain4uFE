import styled from "styled-components";
import { Link } from "react-router-dom";
import { Tobbar } from "../components/Tobbar";
import key2 from "../assets/image/key2.svg";

const TotalContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
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
  font-family: Pretendard;
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
  font-family: Pretendard;
  font-weight: 900;
  font-size: 1.1rem;
  color: #5c5b5b;
  margin: 5% auto 20px;
`;

const CardBox = styled.div`
  width: 80%;
  background-color: #ffffff;
  padding: 30px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  margin: 0 auto 4%;
`;

const CardTitle = styled.h2`
  font-family: Pretendard;
  font-size: 0.8rem; // px :
  font-weight: 500;
  color: #5c5b5b;
  transition: color 0.3s ease;
`;

const Footer = styled.footer`
  width: 100%;
  position: fixed;
  bottom: 0;
  background-color: #ffffff;
  color: #5c5b5b;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 767px) {
    height: 10%;
  }
  @media screen and (min-width: 768px) {
    height: 10%;
  }
`;

const GoTextLinkBox = styled(Link)`
  height: 10%;
  background-color: #005bac;
  font-family: Pretendard;
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
    padding: 13px 0;
    font-size: 0.75rem;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin: 2% auto;
    padding: 13px 0;
    font-size: 1rem;
  }
`;

const Conductdistrubing = () => {
  return (
    <TotalContainer>
      <Tobbar content='UNPERMITTED WORKS' />
      <Container>
        <QuetionLBox>
          <QuetionContent>
            Exceptions to <br></br>Prohibited Work Fields
          </QuetionContent>
          <QuetionImageBox>
            <QuetionImage src={key2} alt='key' />
          </QuetionImageBox>
          <Subtitle>
            If you want to know about the conditions of permission, <br></br>{" "}
            Click those square icon below and check information
          </Subtitle>
        </QuetionLBox>
        <CardBox>
          <CardTitle>Manufacturing Business</CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            Restricted Business such as Manufacturing, Construction, and Mixed
            Industries <br></br>(as listed in the business registration
            certificate)
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            Foreign Language Education Facilities <br></br>for Minors
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>Conversation Instruction (E-2) Activities</CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>Part-Time or Full-Time Seasonal Labor</CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            Exceptions for Part-Time Employment <br></br>in Specialized Fields
            <br></br>(E-1~E-7, E-6-2 Excluded)
          </CardTitle>
        </CardBox>
      </Container>
      <Footer>
        <GoTextLinkBox to={`/unpermittedmain`}>I understand</GoTextLinkBox>
      </Footer>
    </TotalContainer>
  );
};

export default Conductdistrubing;
