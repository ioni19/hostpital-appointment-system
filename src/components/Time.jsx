import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { store } from "../context/store";
import styled from "styled-components";
import theme from "../styles/theme";
// import TimeOptions from "../constantData/timeData";
import { RadioBtn } from "./FormLayout";
import { GrPowerReset } from "react-icons/gr";

const Time = () => {
  const navigate = useNavigate;
  const { selectedDate, formInput, setFormInput, timeOptions } =
    useContext(store);
  // const timeData = TimeOptions.time;

  const goComplete = (id) => {
    navigate(`/complete/${id}`);
  };
  const handleInput = (event) => {
    const { name, value } = event.target;
    setFormInput({ ...formInput, date: selectedDate, [name]: value });
    console.log(formInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormInput({
      ...formInput,
      appoinNum: Math.floor(Math.random() * 1000000000),
    });
    console.log("바디담기전", formInput);
    const body = {
      formInput,
    };
    console.log(body);
    e.preventDefault();

    // fetch("http://localhost:3001/appointmentInfo", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(body),
    // })
    //   .then((res) => res.json())
    //   .then((json) => {
    //     console.log(json);
    //     e.preventDefault();
    //     // goComplete(json.id);
    //   });
  };

  return (
    <TimeContainer>
      <h1 className="title">예약하기</h1>
      <p className="notice">
        13:00 PM - 14:00 PM은 점심시간으로 진료 및 검진 예약이 불가합니다.
      </p>
      <div className="announcement-box">
        <p className="announce">
          <span className="name">{formInput.name}</span> 님이 선택하신{" "}
          {formInput.kind} 예약 일정은
        </p>
        <p className="date">
          {selectedDate &&
            formInput.time &&
            `${selectedDate} ${formInput.time} 입니다.`}
        </p>
      </div>

      {/* <div className="reset-btn">
        <GrPowerReset />
        <span>다시 
        선택하기</span>
      </div> */}
      <div className="time-options">
        {timeOptions.map((options) => (
          <TimeOption
            onClick={handleInput}
            key={options.id}
            isBooked={options.isBooked}
            time
          >
            <input
              type="radio"
              name="time"
              disabled={options.isBooked}
              value={options.time}
              required
            />
            <span>{options.time}</span>
          </TimeOption>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className={formInput.time && "able"}
        disabled={formInput.time ? false : true}
      >
        예약 확정
      </button>
    </TimeContainer>
  );
};

const TimeContainer = styled.div`
  position: relative;
  flex: auto;
  height: 100%;
  padding: 70px 35px 0;
  margin-top: 30px;
  border-radius: 45px 45px 0px 0px;
  background-color: ${theme.color.bgColor};
  /* overflow-y: hidden; */

  .title {
    margin-bottom: 10px;
    color: ${theme.color.fontColor};
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.fontWeight.md};
  }

  .announcement-box {
    padding: 30px;
    background-color: ${theme.color.pointColor};
    border-radius: 16px;

    .announce {
      margin-bottom: 10px;
      color: white;
      font-size: ${theme.fontSize.sm};

      opacity: 0.7;

      .name {
        color: white;
        font-weight: ${theme.fontWeight.md};
        opacity: 10;
      }
    }

    .date {
      height: 30px;
      color: white;
      font-weight: ${theme.fontWeight.md};
      font-size: ${theme.fontSize.md};
    }
  }

  .reset-btn {
    display: flex;
    justify-content: flex-end;
    padding: 30px 20px 10px 0;
    color: ${theme.color.fontColor};
    font-size: ${theme.fontSize.sm};

    svg {
      vertical-align: middle;
      margin-right: 5px;
    }
    span {
      vertical-align: middle;
    }
  }

  .time-options {
    margin-top: 20px;
  }

  .notice {
    padding: 10px 0;
    margin-bottom: 30px;
    color: ${theme.color.fontColor};
    font-size: ${theme.fontSize.sm};
  }

  button {
    position: absolute;
    right: 35px;
    top: 680px;
    width: 120px;
    padding: 15px 0;
    color: ${theme.color.inputColor};
    border: none;
    border-radius: 14px;
    font-size: ${theme.fontSize.base};
    font-weight: ${theme.fontWeight.md};

    &.able {
      color: ${theme.color.pointColor};

      &:hover {
        color: white;
        background-color: ${theme.color.pointColor};
      }
    }
  }
`;

const TimeOption = styled(RadioBtn)`
  display: inline-block;
  height: 30px;
  width: 17.5%;
  margin: 10px;
  padding: 15px 15px 10px 10px;
  background-color: ${(props) => (props.isBooked ? "none" : "white")};
  border-radius: 14px;
  box-shadow: 0 3px 10px 0 rgba(32, 32, 32, 0.08);

  input {
    margin-right: 12px;
    border-color: ${(props) => props.time && "#dcdada"};
    background-color: ${(props) => props.time && "#dcdada"};
    cursor: ${(props) => (props.isBooked ? "not-allowed" : "pointer")};
  }

  span {
    color: ${(props) =>
      props.isBooked
        ? `${theme.color.inputColor}`
        : `${theme.color.fontColor}`};
    font-size: ${theme.fontSize.base};
    letter-spacing: 0;
  }
`;

export default Time;
