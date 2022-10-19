import React, { useState } from "react";
import styled from "styled-components";
import theme from "../styles/theme";
import logo from "../assets/images/logo.png";

const Nav = () => {
  const [isClicked, setClicked] = useState(true);

  const setFalse = () => {
    setClicked(false);
  };

  return (
    <NavContainer>
      <img className="logo" src={logo} alt="logo" />
      <div className="menu-btn-box">
        <MenuBtn clicked={isClicked} onClick={() => setClicked(true)}>
          예약하기
        </MenuBtn>
        <MenuBtn clicked={!isClicked} onClick={() => setClicked(false)}>
          예약조회
        </MenuBtn>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin: 30px 40px 0 0;

  .logo {
    width: 50px;
    margin: 30px;
  }

  .menu-btn-box {
    display: flex;
    flex-direction: column;
    border: none;
  }
`;

const MenuBtn = styled.button`
  width: 120px;
  height: 70px;
  padding: 0 20px;
  background-color: ${(props) =>
    props.clicked ? theme.color.pointColor : "white"};
  color: ${(props) => (props.clicked ? "white" : theme.color.pointColor)};
  font-size: ${theme.fontSize.base};
  font-weight: ${theme.fontWeight.md};
  border: none;
  border-radius: 0 14px 14px 0;
`;

export default Nav;
