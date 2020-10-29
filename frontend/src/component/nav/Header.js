import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeFilled,
  SettingOutlined,
  UserAddOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Toast from "../common/Toast";

const { SubMenu, Item, ItemGroup } = Menu;

// we will get history object when component is rendered using Route. But Header is not rendered using Route so we use useHistory Hook.
const Header = (props) => {
  const dispatch = useDispatch();
  //getting redux state
  let { user } = useSelector((state) => ({ ...state }));
  const [current, setCurrent] = useState("");
  const history = useHistory();
  // to select the item on the nav bar
  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const logout = () => {
    firebase.auth().signOut();
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    Toast("success", "Logout successfull");
    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <StyledItem key="mail" icon={<HomeFilled style={{ fontSize: "18px" }} />}>
        <Link to="/">Home</Link>
      </StyledItem>

      {user && (
        <StyledSubMenu
          key="SubMenu"
          icon={<SettingOutlined style={{ fontSize: "18px" }} />}
          title={user.email && user.email.split("@")[0]}
          className="float-right"
        >
          <ItemGroup title="Item 1">
            <StyledItem key="setting:1">Option 1</StyledItem>
            <StyledItem key="setting:2">Option 2</StyledItem>
            <StyledItem
              icon={<LogoutOutlined style={{ fontSize: "18px" }} />}
              onClick={logout}
            >
              Logout
            </StyledItem>
          </ItemGroup>
        </StyledSubMenu>
      )}

      {!user && (
        <>
          <StyledItem
            key="login"
            icon={<LoginOutlined style={{ fontSize: "18px" }} />}
            className="float-right"
          >
            <Link to="/login">Login</Link>
          </StyledItem>
          <StyledItem
            key="register"
            icon={<UserAddOutlined style={{ fontSize: "18px" }} />}
            className="float-right"
          >
            <Link to="/register">Register</Link>
          </StyledItem>
        </>
      )}
    </Menu>
  );
};

const StyledItem = styled(Item)`
  font-size: 18px;
`;

const StyledSubMenu = styled(SubMenu)`
  font-size: 18px;
`;

export default Header;
