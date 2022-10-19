import React, { useContext, useState } from "react";
import { store } from "../context/store";
import styled from "styled-components";
import theme from "../styles/theme";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const Calendar = () => {
  const {
    setSelectedDate,
    formInput,
    setFormInput,
    timeOptions,
    setTimeOptions,
  } = useContext(store);
  const now = new Date();
  const [startDate, setStartDate] = useState(new Date());
  const [clickDate, setClickDate] = useState();

  const handleDateFormat = (e) => {
    const dateArr = e.toLocaleDateString().slice(0, -1).split(". ");
    setClickDate(dateArr.join(""));
    // console.log(clickDate);
    setSelectedDate(`${dateArr[0]}년 ${dateArr[1]}월 ${dateArr[2]}일`);
  };

  const handleData = () => {
    fetch("http://localhost:3001/timeOptions")
      .then((res) => res.json())
      .then((json) => {
        // // clickDate;
        for (let i = 0; i < json.length; i++) {
          if (json[i].date === Number(clickDate)) {
            setTimeOptions(json[i].time);
            // console.log(json[i].time);
            break;
          }
        }
        // json.map((timeData) => {
        // console.log(timeData.time);
        console.log(clickDate);

        //   timeData.date === Number(clickDate) && setTimeOptions(timeData.time);
        //   console.log(timeOptions);
        // });
      });
  };

  // const handleInput = (event) => {
  //   const { name, value } = event.target;
  //   setFormInput({ ...formInput, date: event, [name]: value });
  //   console.log(formInput);
  // };

  const handleTimeOptions = (e) => {};
  const dateHandler = (e) => {
    setStartDate(e);
    handleDateFormat(e);
    handleData();

    // handleInput(e);
  };

  return (
    <StyledCalendar>
      <DatePicker
        name="date"
        dateFormat="yy년 MM월 dd일 eee요일"
        dateFormatCalendar="M월"
        locale={ko}
        minDate={new Date(now.setDate(now.getDate() + 1))}
        maxDate={new Date(now.setDate(now.getDate() + 14))}
        selected={startDate}
        inline
        onChange={dateHandler}
        disabledKeyboardNavigation
      />
    </StyledCalendar>
  );
};

export const StyledCalendar = styled.div`
  margin-top: 70px;

  .react-datepicker {
    width: 500px;
    padding: 30px 20px;
    border: none;
    /* color: #606060; */

    .react-datepicker__navigation--previous {
      left: 20px;
      top: 300px;
      color: ${theme.color.pointColor};
    }

    .react-datepicker__navigation--next {
      right: 20px;
      top: 300px;
    }

    .react-datepicker__month-container {
      width: 500px;

      .react-datepicker__header {
        width: 500px;
        padding: 0;
        background-color: white;
        border: none;

        .react-datepicker__current-month {
          margin-bottom: 50px;
          color: ${theme.color.fontColor};
          font-size: ${theme.fontSize.md};
          font-weight: ${theme.fontWeight.base};
          letter-spacing: 0;
        }

        .react-datepicker__day-names {
          width: 500px;
          margin: 0;

          .react-datepicker__day-name {
            margin: 8px 15px;
            color: ${theme.color.fontColor};
            font-size: ${theme.fontSize.xs};
          }
        }
      }

      .react-datepicker__month {
        width: 500px;
        margin: 0;

        // 날짜 숫자 클래스
        .react-datepicker__day {
          margin: 0;
          margin: 5px;
          padding: 10px;
          color: ${theme.color.fontColor};
          font-size: ${theme.fontSize.xs};
          font-weight: ${theme.fontWeight.base};
          /* border: 0.5px solid gray; */

          :hover {
            background-color: f0f0f0;
            border-radius: 50px;
          }
        }

        //disabled 날짜 클래스
        .react-datepicker__day--disabled {
          background-color: white;
          color: #cacaca;
        }

        //선택된 날짜 클래스
        .react-datepicker__day--selected {
          border-radius: 50px;
          background-color: ${theme.color.pointColor};
          color: white;
        }

        //전월, 다음월 날짜 클래스
        .react-datepicker__day--outside-month {
          color: white;
          background-color: white;
        }

        //오늘 날짜 선택 클래스
        .react-datepicker__day--today {
          border-radius: 0;
          font-weight: ${theme.fontWeight.base};
          color: ${theme.color.fontColor};
          background-color: white;
        }
      }
    }
  }
`;
export default Calendar;
