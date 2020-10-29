import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import Toast from "../component/common/Toast";
import styled from "styled-components";

const UserRoutes = ({ children, ...rest }) => {
  let { user } = useSelector((state) => ({ ...state }));
  return user && user.token ? (
    <Route {...rest} render={() => children} />
  ) : (
    <>
      {Toast("error", <StyledText>Please Login or Register first</StyledText>)}
      <Redirect to="/login" />
    </>
  );
};

const StyledText = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export default UserRoutes;
