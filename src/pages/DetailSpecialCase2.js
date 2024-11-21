import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Tobbar } from "../components/Tobbar";

const TotalContainer = styled.div`
  width: 100%;
  height: 100vh;
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
  @media screen and (max-width: 767px) {
    margin: 0 auto 5%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 auto 8%;
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

const Subtitle = styled.div`
  width: 100%;
  text-align: left;
  font-weight: 900;
  font-size: 1.1rem;
  color: #5c5b5b;
  margin: 0 auto 20px;
`;

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10%;
  @media screen and (max-width: 767px) {
    justify-content: space-between;
  }
  @media screen and (min-width: 768px) {
    justify-content: space-around;
  }
`;

const CardBox = styled.div`
  width: 40%;
  height: 80px;
  background-color: #ffffff;
  padding: 30px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardTitle = styled.h2`
  font-weight: 500;
  color: #5c5b5b;
  transition: color 0.3s ease;
  @media screen and (max-width: 767px) {
    font-size: 0.7rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
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
    margin: 25px auto;
    padding: 20px 0;
    font-size: 1rem;
  }
`;

const DetailSpecialCase2 = () => {
  const navigate = useNavigate();
  return (
    <TotalContainer>
      <Tobbar content='UNPERMITTED WORKS' />
      <Container>
        <QuetionLBox>
          <QuetionContent>
            Here are detailed explanation <br></br> about special cases
          </QuetionContent>
        </QuetionLBox>
        <Subtitle>Activities related to studies</Subtitle>
        <CardContainer>
          <CardBox>
            <CardTitle>
              ON-CAMPUS <br></br>
              <br></br> Exemption from <br></br>authorization
            </CardTitle>
          </CardBox>
          <CardBox>
            <CardTitle>
              ON-CAMPUS <br></br>
              <br></br>Authorization <br></br> required
            </CardTitle>
          </CardBox>
        </CardContainer>
        <Subtitle>Activities unrelated to studies</Subtitle>
        <CardContainer>
          <CardBox>
            <CardTitle>
              ON-CAMPUS<br></br>
              <br></br> Authorization <br></br> required
            </CardTitle>
          </CardBox>
          <CardBox>
            <CardTitle>
              OFF-CAMPUS<br></br>
              <br></br> Authorization <br></br>required
            </CardTitle>
          </CardBox>
        </CardContainer>
      </Container>
      <Footer>
        <GoTextLinkBox
          onClick={() => {
            navigate(`/unpermittedmain`);
          }}
        >
          I understand
        </GoTextLinkBox>
      </Footer>
    </TotalContainer>
  );
};

export default DetailSpecialCase2;
