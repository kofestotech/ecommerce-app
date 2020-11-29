import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminLeftNav = () => {
  return (
    <StyledNav>
      <StyledUl className="nav flex-column">
        <StyledListItem className="nav-item">
          <StyledLink to="/admin/dashboard" className="nav-link">
            Dashboard
          </StyledLink>
        </StyledListItem>

        <StyledListItem className="nav-item">
          <StyledLink to="/admin/product" className="nav-link">
            Create Product
          </StyledLink>
        </StyledListItem>

        <StyledListItem className="nav-item">
          <StyledLink to="/admin/products" className="nav-link">
            Products
          </StyledLink>
        </StyledListItem>

        <StyledListItem className="nav-item">
          <StyledLink to="/admin/category" className="nav-link">
            Category
          </StyledLink>
        </StyledListItem>

        <StyledListItem className="nav-item">
          <StyledLink to="/admin/sub-category" className="nav-link">
            Sub Category
          </StyledLink>
        </StyledListItem>

        <StyledListItem className="nav-item">
          <StyledLink to="/admin/coupen" className="nav-link">
            Create Coupen
          </StyledLink>
        </StyledListItem>

        <StyledListItem className="nav-item">
          <StyledLink to="/user/password" className="nav-link">
            Reset Password
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

export default AdminLeftNav;
