import React from "react";
import styled from "styled-components";
import theme from "../styles/theme";

const Complete = () => {
  return (
    <CompleteContainer>
      <h1>예약이 완료되었습니다.</h1>
    </CompleteContainer>
  );
};

const CompleteContainer = styled.div`
  h1 {
    color: ${theme.color.fontColor};
    font-size: ${theme.fontSize.lg};
    font-weight: 800;
  }
`;

export default Complete;
