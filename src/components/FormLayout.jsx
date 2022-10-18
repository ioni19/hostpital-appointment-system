import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import { BsFillCheckCircleFill } from "react-icons/bs";

const FormLayout = ({ formData }) => {
  const handleCheck = (e) => {
    e.currentTarget.classList.toggle("check");
  };

  return (
    <FormContainer>
      <h1 className="title">{formData.title}</h1>
      <Form>
        {formData.radio && (
          <div className="radio-input">
            {formData.radio.map((content, idx) => (
              <RadioBtn key={idx}>
                <input type="radio" value={content} name="kind" required />
                <span>{content}</span>
              </RadioBtn>
            ))}
          </div>
        )}
        <div className="text-input">
          {formData.input.map((content) => (
            <input type="text" placeholder={content} required />
          ))}
        </div>
        <div className="notice-box">
          <div className="bg-box">
            <h3>{formData.notice.title}</h3>
            <p>{formData.notice.content}</p>
          </div>
          {formData.checkBtn && (
            <div className="check-box" onClick={handleCheck}>
              <BsFillCheckCircleFill />
              <span>동의</span>
            </div>
          )}
        </div>
        <div className="btn-box">
          <button>{formData.buttonContent}</button>
        </div>
      </Form>
    </FormContainer>
  );
};

const FormContainer = styled.div`
  position: relative;
  padding: 70px 35px 0;
  margin-top: 30px;
  border-radius: 45px 45px 0px 0px;
  background-color: ${theme.color.bgColor};
  /* overflow-y: hidden; */

  .title {
    margin-bottom: 30px;
    color: ${theme.color.fontColor};
    font-size: ${theme.fontSize.lg};
    font-weight: ${theme.fontWeight.md};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  .radio-input {
    margin: 10px 0;
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

  .notice-box {
    .bg-box {
      width: 400px;
      padding: 20px 20px;
      background-color: white;
      border-radius: 16px;
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

    .check-box {
      width: 100%;
      margin-top: 20px;
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

      &.check {
        color: ${theme.color.pointColor};
      }
    }
  }

  .btn-box {
    position: absolute;
    right: 35px;
    bottom: 30px;
    margin-top: 20px;

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
