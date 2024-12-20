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
    height: 84%;
    padding: 09%;
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
  font-family: "Pretendard";
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

const DetailConductDistrubing = () => {
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
              <TableCell>Game-providing business</TableCell>
              <TableCell>
                The term "game providing business" means business of providing
                game products so that the public may use such products:
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Combined distribution business</TableCell>
              <TableCell>
                The term "combined distribution and game providing business"
                means youth game providing business, or business of providing
                Internet computer game facilities, in combination with another
                business under this Act or a business under other statutes at
                the same location; Institute
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Running a videoviewing establish-ment</TableCell>
              <TableCell>
                The business of running a video-viewing establishment: Business
                offering video products to the public for the purpose of their
                viewing with multiple partitioned video-viewing compartments and
                video-viewing apparatuses installed therein (including where
                customers operate the viewing machine by themselves);
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Karaoke business</TableCell>
              <TableCell>
                The term "lodging business" means the business of rendering such
                services as facilities and accommodations, so as to make
                customers able to sleep and stay: Provided, That the case as
                prescribed by Presidential Decree shall be excluded, such as
                private houses taking lodgings, which are located in
                agricultural and fishery villages;
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Lodging business</TableCell>
              <TableCell>
                The term "karaoke business" means a business that provides the
                general public with the use of accompaniment machines, with or
                without images, and other facilities, along with which people
                can sing songs in the accompaniment of pre-recorded music
                without performers of any instrument;
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

export default DetailConductDistrubing;
