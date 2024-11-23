import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "styled-components";
import { Tobbar } from "../components/Tobbar";
import pb from "../services/pb";

const TotalContainer = styled.div`
  width: 100%;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 767px) {
    width: 82%;
    height: 85%;
    padding: 0 9% 0;
  }
  @media screen and (min-width: 768px) {
    width: 40%;
    height: 84%;
    padding: 0 30%;
  }
`;

const Table = styled.table`
  width: 90%;
  border-collapse: collapse;
  margin: 2% auto 20px;
`;

const Label = styled.label`
  font-weight: 500;
  font-size: 0.8rem;
  color: #5c5b5b;
`;

const TableRow = styled.tr``;

const TableCell = styled.td`
  padding: 4px;
  border: 1px solid #5c5b5b;
  color: #5c5b5b;
  font-weight: 300;

  &:nth-child(1) {
    min-width: 65px;
    text-align: center;
    background-color: #d9d9d9;
    @media screen and (max-width: 767px) {
      font-size: 0.6rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 1rem;
    }
  }
  &:nth-child(2) {
    width: 80%;
    background-color: transparent;
    @media screen and (max-width: 767px) {
      font-size: 0.6rem;
    }
    @media screen and (min-width: 768px) {
      font-size: 0.8rem;
      padding: 5px 10px;
    }
  }
`;

const Button = styled.div`
  background-color: #005bac;
  font-weight: 700;
  color: #fff;
  border-radius: 100px;
  border: none;
  text-align: center;
  cursor: pointer;
  padding: 10px 0;
  text-decoration: none;

  @media screen and (max-width: 767px) {
    width: 80%;
    font-size: 0.75rem;
    margin-top: 8%;
    margin-bottom: 10%;
  }
  @media screen and (min-width: 768px) {
    width: 80%;
    font-size: 1rem;
    margin-top: 10%;
    margin-bottom: 10%;
  }
`;

const Contract = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {
    employerFormData,
    workInfoData,
    workingHoursData,
    dailyRecessTime,
    wageData,
    monthWage,
    paymentMethodsData,
  } = location.state;
  const { name, address, birth } = pb.authStore.model;
  return (
    <TotalContainer>
      <Tobbar content='STANDARD LABOR CONTRACT' />
      <Container>
        <Label>Employer</Label>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>
                Name of <br></br> the enterprise
              </TableCell>
              <TableCell>{employerFormData.name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Phone <br></br> number
              </TableCell>
              <TableCell>{employerFormData.phoneNumber}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Location of <br></br> the enterprise
              </TableCell>
              <TableCell>{employerFormData.location}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Name of <br></br> the employer
              </TableCell>
              <TableCell>{employerFormData.employerName}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Identification <br></br> number
              </TableCell>
              <TableCell>{employerFormData.identificationNumber}</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Label>Employee</Label>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>
                Name of <br></br> the employee
              </TableCell>
              <TableCell> {name}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Birthdate</TableCell>
              <TableCell>{birth}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Address <br></br> (HomeCountry)
              </TableCell>
              <TableCell> {address}</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Label>Place of employment</Label>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>
                Place of <br></br> employment
              </TableCell>
              <TableCell>{employerFormData.placeOfEmployment}</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Label>Description of work</Label>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>Industry</TableCell>
              <TableCell>{workInfoData.industry}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Business <br></br> description
              </TableCell>
              <TableCell>{workInfoData.businessdescription}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Job <br></br> description
              </TableCell>
              <TableCell>{workInfoData.jobdescription}</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Label>Working Hours</Label>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>
                Term of <br></br> Labor contract
              </TableCell>
              <TableCell>
                {workingHoursData.startDate === "" &&
                workingHoursData.endDate === ""
                  ? ""
                  : `${workingHoursData.startDate} ~ ${workingHoursData.endDate}`}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Working hours <br></br> per day
              </TableCell>
              <TableCell>
                {workingHoursData.startTime === "" &&
                workingHoursData.endTime === ""
                  ? ""
                  : `${workingHoursData.startTime} ~ ${workingHoursData.endTime}`}
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Label>Recess hours</Label>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>
                Recess <br></br> hours
              </TableCell>
              <TableCell>{dailyRecessTime} minutes per day</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Label>Payment</Label>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>
                Hourly <br></br> Wage
              </TableCell>
              <TableCell>{wageData.hourlyWage} won </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                Monthly <br></br> Normal Wages
              </TableCell>
              <TableCell>{monthWage} won</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Label>Payment Date</Label>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>
                Payment <br></br> Date
              </TableCell>
              <TableCell>
                {wageData.paymentData === ""
                  ? ""
                  : `${wageData.paymentData} of every month`}
              </TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Label>Payment Methods</Label>
        <Table>
          <tbody>
            <TableRow>
              <TableCell>
                Payment <br></br> Methods
              </TableCell>
              <TableCell>{paymentMethodsData}</TableCell>
            </TableRow>
          </tbody>
        </Table>
        <Button onClick={() => navigate("/main")}>Back to Home</Button>
      </Container>
    </TotalContainer>
  );
};

export default Contract;
