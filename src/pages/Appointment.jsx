import React from "react";
import styled from "styled-components";
import Nav from "../components/Nav";
import Calendar from "../components/Calendar";
import Time from "../components/Time";

const Appointment = () => {
  return (
    <Container>
      <Nav />
      <Calendar />
      <Time />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  height: 100vh;
`;
export default Appointment;
