import React, { useContext, useState } from "react";
import { store } from "../context/store";
import styled from "styled-components";
import theme from "../styles/theme";
import logo from "../assets/images/logo.png";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { menu, setMenu } = useContext(store);
  const [isClicked, setClicked] = useState(true);

  const goConfirm = () => {
    if (location.pathname === "/appointment") {
      navigate("/");
      setMenu("confirm");
      console.log("누름");
    }
  };

  return (
    <NavContainer>
      <div className="menu-btn-box">
        <MenuBtn
          id="appointment"
          clicked={isClicked}
          onClick={(e) => {
            setClicked(true);
            setMenu(e.target.id);
          }}
        >
          예약하기
        </MenuBtn>
        <MenuBtn
          id="confirm"
          clicked={!isClicked}
          onClick={(e) => {
            setClicked(false);
            setMenu(e.target.id);
            goConfirm();
          }}
        >
          예약조회
        </MenuBtn>
      </div>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  margin: 30px 40px 0 0;

  .menu-btn-box {
    margin-top: 100px;
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
