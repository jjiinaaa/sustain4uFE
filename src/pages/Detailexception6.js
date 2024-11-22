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
    padding: 0 9% 0;
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

const Detailexception6 = () => {
  const navigate = useNavigate();
  return (
    <TotalContainer>
      <Tobbar content='UNPERMITTED WORKS' />
      <Container>
        <QuetionLBox>
          <QuetionContent>
            Exceptions for Part-Time Employment <br></br> In Specialized Fields
          </QuetionContent>
        </QuetionLBox>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>Supportive Activities (E-1, E-7 excluded)</TableCell>
              <TableCell>
                Support activities such as interpretation/translation
                assistance, cook's assistant, general office assistance, tourist
                guide assistance, duty-free store sales assistance, etc.
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Internship Activities for Students Engaged in Work-Learning
                Integration
              </TableCell>
              <TableCell>
                Permitted to engage in internships at external institutions and
                companies related to specialized fields (E-1~E-7) <br></br>
                <br></br>
                **Work as an intern in the form of training or probation with a
                stipend in a specialized field Institute
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Internship Activities for Degree-Seeking Students
              </TableCell>
              <TableCell>
                Permitted to engage in internships at external institutions and
                companies during vacation periods in specialized fields
                (E-1~E-7) <br></br>
                <br></br> **Work as an intern in the form of training or
                probation with a stipend in a specialized field
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Internship Activities for Degree-Seeking Students
              </TableCell>
              <TableCell>
                Permitted to engage in internships at external institutions and
                companies during vacation periods in specialized fields
                (E-1~E-7) <br></br>
                <br></br> **Work as an intern in the form of training or
                probation with a stipend in a specialized field
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Supportive Activities (E-1, E-7 involved)</TableCell>
              <TableCell>
                If engaging in part-time employment in a job that requires
                certain qualifications under domestic law, those qualifications
                must be met
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
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

export default Detailexception6;
