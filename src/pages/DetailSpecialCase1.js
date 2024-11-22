import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { Tobbar } from "../components/Tobbar";

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
  margin: 0 auto 20px;
`;

const QuetionContent = styled.div`
  width: 100%;
  text-align: center;
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

const DetailSpecialCase1 = () => {
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
        <CardBox>
          <CardTitle>
            When participating as a teaching assistant (including course
            assistants), library staff, or work-study student receiving
            compensation from the school
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            When receiving remuneration or other compensation for temporary,
            non-professional household assistance or office assistance, such as
            with domestic helpers
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            When receiving payment for non-professional activities such as
            advice, appraisals, event participation, or temporary (one-time and
            non-continuous) appearances in films or broadcasts, and other
            similar activities (Immigration Control Division-4716, July 22,
            2010)
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            When designated as a police interpreter by the Commissioner General
            of the National Police Agency and engaged in intermittent
            interpreting activities according to the assigned schedule and
            preferences (except when employed as a professional interpreter with
            salary equivalent to a specialized occupation)
          </CardTitle>
        </CardBox>
        <CardBox>
          <CardTitle>
            When participating in a standard field training semester program
            under the Ministry of Education’s Higher Education Act and the
            "University Field Training Semester Program Regulations"
          </CardTitle>
        </CardBox>
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

export default DetailSpecialCase1;
