import React, { useState, useEffect } from "react";
import { store } from "../context/store";
import styled from "styled-components";
import theme from "../styles/theme";
import { useParams } from "react-router-dom";

const Complete = () => {
  const params = useParams();
  const userId = params.id;
  const [appointInfo, setAppointInfo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/appointmentInfo/${userId}`)
      .then((res) => res.json())
      .then((json) => {
        setAppointInfo(json.formInput);
      });
  }, []);

  return (
    <CompleteContainer>
      <div className="content-box">
        <h1 className="title">예약이 완료되었습니다.</h1>
        <p className="content">
          {appointInfo.name} ({appointInfo.phoneNum}) 님
          <br />
          {appointInfo.appointNum} {appointInfo.time} 에{appointInfo.date}{" "}
          예약완료 되었습니다.
        </p>
      </div>
    </CompleteContainer>
  );
};

const CompleteContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;

  .content-box {
    width: 60vw;
    height: 30vh;
    padding: 70px 35px 0;
    margin: auto auto;
    border-radius: 45px;
    background-color: ${theme.color.bgColor};

    .title {
      text-align: center;
      justify-content: center;
      color: ${theme.color.fontColor};
      font-size: ${theme.fontSize.lg};
      font-weight: ${theme.fontWeight.md};
    }

    .content {
      margin-top: 50px;
      text-align: center;
      color: ${theme.color.fontColor};
      font-size: ${theme.fontSize.base};
    }
  }
`;

export default Complete;
