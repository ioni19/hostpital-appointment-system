import React, { useState } from "react";
import styled from "styled-components";
import formData from "../constantData/formData";
import Nav from "../components/Nav";
import FormLayout from "../components/FormLayout";
import Calendar from "../components/Calendar";

const Main = () => {
  const [menu, setMenu] = useState("appointment");

  return (
    <MainContainer>
      <Nav setMenu={setMenu} />
      {menu === "appointment" && <FormLayout formData={formData.Appointment} />}
      {menu === "confirm" && <FormLayout formData={formData.Confirm} />}

      <Calendar />
    </MainContainer>
  );
};

export default Main;

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  overflow-y: hidden;
`;
