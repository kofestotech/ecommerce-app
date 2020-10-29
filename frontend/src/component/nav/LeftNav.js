import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LeftNav = () => {
  return (
    <StyledNav>
      <StyledUl className="nav flex-column">
        <StyledListItem className="nav-item">
          <StyledLink to="/user/dashboard" className="nav-link">
            Dashboard
          </StyledLink>
        </StyledListItem>

        <StyledListItem className="nav-item">
          <StyledLink to="/user/reset-password" className="nav-link">
            Reset Password
          </StyledLink>
        </StyledListItem>

        <StyledListItem className="nav-item">
          <StyledLink to="/user/wishlist" className="nav-link">
            Wishlist
          </StyledLink>
        </StyledListItem>
      </StyledUl>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background: rgba(202, 202, 202, 0.2) !important;
  width: 100%;
  border-radius: 5px;
  height: 80vh;
  line-height: 50px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const StyledUl = styled.ul`
  padding-top: 30px;
  padding-left: 6px;
`;

const StyledListItem = styled.li`
  margin-bottom: 10px;
  height: 60px;
  width: 96%;
  transition: all 0.2s;

  &:hover {
    background: rgba(202, 202, 202, 0.9);
  }
`;

const StyledLink = styled(Link)``;

export default LeftNav;
