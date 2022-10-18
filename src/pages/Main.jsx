import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import FormLayout from "../components/FormLayout";
import Calendar from "../components/Calendar";

const Main = () => {
  return (
    <MainContainer>
      <Nav />
      <FormLayout />
      <Calendar />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  margin-top: 30px;
  overflow: hidden;
`;
