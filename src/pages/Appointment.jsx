import React, { useContext } from "react";
import { store } from "../context/store";
import styled from "styled-components";
import Nav from "../components/Nav";
import Calendar from "../components/Calendar";
import Time from "../components/Time";
import { useNavigate } from "react-router-dom";

const Appointment = () => {
  const navigate = useNavigate();
  const { formInput } = useContext(store);
  if (formInput.name === undefined) navigate("/");
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
