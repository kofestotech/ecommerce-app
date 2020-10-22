import React, { useState } from "react";
import { Menu } from "antd";
import {
  HomeFilled,
  SettingOutlined,
  UserAddOutlined,
  UserOutlined,
  LoginOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { Link, useHistory } from "react-router-dom";
import firebase from "firebase";
import { useDispatch } from "react-redux";

const { SubMenu, Item, ItemGroup } = Menu;

// we will get history object when component is rendered using Route. But Header is not rendered using Route so we use useHistory Hook.
const Header = (props) => {
  const dispatch = useDispatch();
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
    history.push("/login");
  };

  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Item key="mail" icon={<HomeFilled />}>
        <Link to="/">Home</Link>
      </Item>

      <SubMenu key="SubMenu" icon={<SettingOutlined />} title="Username">
        <ItemGroup title="Item 1">
          <Item key="setting:1">Option 1</Item>
          <Item key="setting:2">Option 2</Item>
          <Item icon={<LogoutOutlined />} onClick={logout}>
            Logout
          </Item>
        </ItemGroup>
      </SubMenu>

      <Item key="login" icon={<LoginOutlined />} className="float-right">
        <Link to="/login">Login</Link>
      </Item>
      <Item key="register" icon={<UserAddOutlined />} className="float-right">
        <Link to="/register">Register</Link>
      </Item>
    </Menu>
  );
};

export default Header;
