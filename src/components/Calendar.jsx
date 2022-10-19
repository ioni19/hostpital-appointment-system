import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/esm/locale";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  // const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  return (
    <StyledCalendar>
      <DatePicker
        dateFormat="yy.MM.dd(eee)"
        dateFormatCalendar="yyyy년 M월"
        locale={ko}
        minDate={new Date()}
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
        disabledKeyboardNavigation
      />
    </StyledCalendar>
  );
};

export const StyledCalendar = styled.div`
  margin-top: 80px;
  .react-datepicker {
    width: 500px;
    padding: 30px 20px;
    border: none;
    /* color: #606060; */

    .react-datepicker__navigation--previous {
      left: 80px;
      top: 29px;
    }

    .react-datepicker__navigation--next {
      right: 80px;
      top: 29px;
    }

    .react-datepicker__month-container {
      width: 500px;

      .react-datepicker__header {
        width: 500px;
        background-color: white;
        border: none;

        .react-datepicker__current-month {
          margin-bottom: 50px;
          color: ${theme.color.fontColor};
          font-size: ${theme.fontSize.base};
        }

        .react-datepicker__day-names {
          width: 500px;
          margin: 0;

          .react-datepicker__day-name {
            margin: 15px;
            color: ${theme.color.fontColor};
            font-size: ${theme.fontSize.xs};
            font-weight: 600;
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
          color: #606060;
          font-size: ${theme.fontSize.xs};
          font-weight: ${theme.fontWeight.base};
          /* border: 0.5px solid gray; */

          :hover {
            background-color: f0f0f0;
            border-radius: 50px;
          }
        }

        //주말 클래스
        .react-datepicker__day--weekend {
          color: #cacaca;
        }

        //오늘 날짜 이전, 선택불가 날짜 클래스
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
          color: ${theme.color.pointColor};
          background-color: white;
        }
      }
    }
  }
`;
export default Calendar;
