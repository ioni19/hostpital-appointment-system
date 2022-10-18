import React from "react";
import styled from "styled-components";
import formData from "../constantData/formData";
import Nav from "../components/Nav";
import FormLayout from "../components/FormLayout";
import Calendar from "../components/Calendar";

const Main = () => {
  return (
    <MainContainer>
      <Nav />
      <FormLayout formData={formData.Appointment} />
      <FormLayout formData={formData.Confirm} />
      <Calendar />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  /* padding-top: 3%; */
  overflow-y: hidden;
`;
