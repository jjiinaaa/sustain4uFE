import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";

const TotalContainer = styled.div`
  width: 100%;
  margin-bottom: 100px;
`;
const Container = styled.div`
  width: 100%;
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
    height: 84%;
    padding: 0 30%;
  }
`;

const QuetionLBox = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const Table = styled.table`
  width: 80%;
  border-collapse: collapse;
  margin: 5% auto;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 8px;
  border: 1px solid #5c5b5b;
  color: #5c5b5b;

  &:nth-child(1) {
    text-align: center;
    background-color: rgba(0, 91, 172, 0.3);
    font-weight: 500;
    @media screen and (max-width: 767px) {
      font-size: 0.7rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
  &:nth-child(2) {
    text-align: left;
    background-color: #f1f1f1;
    font-weight: 300;
    @media screen and (max-width: 767px) {
      font-size: 0.6rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 0.8rem;
    }
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

const CardBox = styled.div`
  width: 80%;
  background-color: #ffffff;
  padding: 30px;
  border: 1px solid #fff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  box-sizing: border-box;

  @media screen and (max-width: 767px) {
    margin: 0 auto 5%;
  }
  @media screen and (min-width: 768px) {
    margin: 0 auto 2%;
  }
  &:focus,
  &:active {
    border: 1px solid rgba(0, 91, 172, 1);
    background-color: rgba(0, 91, 172, 0.3);

    h2,
    p {
      color: "#005bac";
    }
    div > img {
      filter: invert(100);
    }
  }
`;

const CardTitle = styled.h2`
  font-size: 0.7rem;
  font-weight: 500;
  color: #5c5b5b;
  transition: color 0.3s ease;
  text-align: center;
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

const Detailexception = () => {
  const navigate = useNavigate();
  return (
    <TotalContainer>
      <Tobbar content='UNPERMITTED WORKS' />
      <Container>
        <QuetionLBox>
          <QuetionContent>
            Here are detailed explanation <br></br> about the prohibited field
          </QuetionContent>
        </QuetionLBox>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>Permitted Occu-pations & Activities</TableCell>
              <TableCell>Conditions for Permission</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Manufac- turing Business</TableCell>
              <TableCell>
                One of the following Korean language qualifications must be
                obtained: - TOPIK Level 4 or above - Completed Level 4 of the
                Social Integration Program - Obtained 81 points or more in the
                pre-assessment - Completed Intermediate 2 level at Sejong
                Institute
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Manufac-turing, Construc-tion, MixedIndustries
              </TableCell>
              <TableCell>
                The industry listed in the university-submitted ‘Part-Time
                Employment Confirmation’ must not be a restricted industry
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Foreign Language Education Facilities for Minors
              </TableCell>
              <TableCell>
                Submit a criminal record certificate issued by the home
                country’s government - Submit a medical check-up certificate
                issued by a Ministry of Justice designated medical institution
                (including drug test results)
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Conver-sation Instruction (E-2) Activities</TableCell>
              <TableCell>
                If a permit for activities outside the stay status is granted
                <br></br>
                <br></br>
                **First violation will be punished according to the rules
                without leniency
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Part-Time or Full-Time Seasonal Labor</TableCell>
              <TableCell>
                **Refer to the 'Foreign Seasonal Worker Program Basic Plan'
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
        <CardBox
          onClick={() => {
            navigate("/unpermittedmain");
          }}
        >
          <CardTitle>
            Exceptions for Part-Time Employment in Specialized Fields <br></br>
            (E-1~E-7, E-6-2 Excluded)
          </CardTitle>
        </CardBox>
      </Container>
      <Footer>
        <GoTextLinkBox
          onClick={() => {
            navigate("/unpermittedmain");
          }}
        >
          I understand
        </GoTextLinkBox>
      </Footer>
    </TotalContainer>
  );
};

export default Detailexception;
