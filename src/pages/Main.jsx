import React, { useState, useContext } from "react";
import { store } from "../context/store";
import styled from "styled-components";
import formData from "../constantData/formData";
import Modal from "../components/Modal";
import Nav from "../components/Nav";
import FormLayout from "../components/FormLayout";
import Calendar from "../components/Calendar";

const Main = () => {
  const { menu } = useContext(store);
  return (
    <MainContainer>
      <Nav />
      {menu === "appointment" && <FormLayout formData={formData.Appointment} />}
      {menu === "confirm" && <FormLayout formData={formData.Confirm} />}
      {menu === "appointment" && <Calendar />}
      {/* <Modal /> */}
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
`;
