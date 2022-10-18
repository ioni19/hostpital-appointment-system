import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { BsFillCheckCircleFill } from "react-icons/bs";

const FormLayout = () => {
  const [clicked, setClicked] = useState(false);
  console.log(clicked);
  const handleCheck = (e) => {
    console.log("마지막요소", e.target);
    console.log("이벤트 바인딩 요소", e.currentTarget);
    e.currentTarget.classList.toggle("check");
  };
  return (
    <FormContainer>
      <h1 className="title">예약하기</h1>
      <Form>
        <div className="radio-input">
          <RadioBtn>
            <input type="radio" value="진료" />
            <span>진료</span>
          </RadioBtn>
          <RadioBtn>
            <input type="radio" value="검진" />
            <span>검진</span>
          </RadioBtn>
        </div>
        <div className="text-input">
          <input type="text" placeholder="이름" required />
          <input type="text" placeholder="전화번호" required />
          <input type="text" placeholder="주민등록번호" required />
        </div>
        <div className="privacy-consent">
          <div className="bg-box">
            <h3>개인정보 수집∙이용 동의</h3>
            <p>
              개인정보는 병원정보 조회를 위해서만 사용됩니다. 개인정보 이용에
              동의합니다. 비동의 시 온라인 병원 예약 서비스를 이용하실 수 없습니다.
            </p>
          </div>
          <div className="check-box" onClick={() => setClicked(!clicked)}>
            <BsFillCheckCircleFill />
            <span>동의</span>
          </div>
        </div>
        <div className="btn-box">
          <button>확인</button>
        </div>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  height: 100%;
  padding: 70px 35px 30px;
  border-radius: 45px 45px 0px 0px;
  background-color: ${theme.color.bgColor};

  .title {
    color: ${theme.color.fontColor};
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.fontWeight.md};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  .radio-input {
    margin: 40px 0 10px;
    font-weight: ${theme.fontWeight.md};
  }

  .text-input input {
    display: flex;
    align-items: center;
    width: 400px;
    margin: 20px 0;
    padding: 20px 20px;
    border: none;
    border-radius: 14px;
    font-size: ${theme.fontSize.base};

    &::placeholder {
      color: ${theme.color.inputColor};
      font-size: ${theme.fontSize.base};
    }

    &:focus {
      outline: 3px solid ${theme.color.pointColor};
    }
  }

  .privacy-consent {
    .bg-box {
      width: 400px;
      padding: 20px 20px;
      background-color: white;
      border-radius: 14px;
      color: ${theme.color.fontColor};

      h3 {
        padding-bottom: 20px;
        font-size: ${theme.fontSize.base};
        font-weight: ${theme.fontWeight.md};
      }

      p {
        line-height: 25px;
        font-size: ${theme.fontSize.sm};
        font-weight: ${theme.fontWeight.light};
      }
    }

    .check {
      color: ${theme.color.pointColor};
    }

    .check-box {
      width: 100%;
      margin: 20px 0 20px;
      font-size: ${theme.fontSize.base};
      color: ${(props) =>
        props.clicked ? theme.color.pointColor : theme.color.inputColor};

      svg {
        vertical-align: middle;
        margin: 0 10px 0 5px;
      }
      span {
        vertical-align: middle;
      }
    }
  }

  .btn-box {
    display: flex;
    justify-content: flex-end;

    button {
      width: 120px;
      padding: 15px 0;
      color: white;
      border: none;
      border-radius: 14px;
      background-color: ${theme.color.pointColor};
      font-size: ${theme.fontSize.base};
      font-weight: ${theme.fontWeight.md};
    }
  }
`;

const RadioBtn = styled.label`
  margin-right: 30px;
  cursor: pointer;

  input {
    appearance: none;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    margin-right: 10px;
    background-color: ${theme.color.inputColor};
    border: 4px solid ${theme.color.inputColor};
    border-radius: 50%;

    &:checked {
      background-color: ${theme.color.pointColor};
    }
  }

  span {
    vertical-align: middle;
    color: ${theme.color.fontColor};
    font-size: ${theme.fontSize.base};
  }
`;
export default FormLayout;
