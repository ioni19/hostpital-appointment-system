import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import logo from "../assets/images/logo.png";

const Nav = () => {
  const [isClicked, setClicked] = useState(true);
  const handleClicked = () => {
    setClicked((current) => !current);
  };

  return (
    <NavContainer>
      <img className="logo" src={logo} alt="logo" />
      <div className="menu-btn-box">
        <MenuBtn clicked={isClicked} onClick={handleClicked}>
          예약하기
        </MenuBtn>
        <MenuBtn clicked={!isClicked} onClick={handleClicked}>
          예약조회
        </MenuBtn>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin-right: 40px;

  .logo {
    width: 30px;
  }

  .menu-btn-box {
    display: flex;
    flex-direction: column;
    border: none;
  }
`;

const MenuBtn = styled.button`
  height: 70px;
  padding: 0 20px;
  background-color: ${(props) =>
    props.clicked ? "white" : theme.color.pointColor};
  color: ${(props) => (props.clicked ? theme.color.pointColor : "white")};
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.md};
  border: none;
  border-radius: 0 14px 14px 0;
`;

export default Nav;
