import React, { useState, useEffect } from "react";
import AdminLeftNav from "../../../component/nav/AdminLeftNav";
import Toast from "../../../component/common/Toast";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import styled from "styled-components";

const Categories = (props) => {
  const { name, _id, slug } = props.category;
  const { user } = useSelector((state) => ({ ...state }));
  const { handleDelete } = props;
  const capitalize = (categoryName) => {
    return categoryName.charAt(0).toUpperCase() + categoryName.slice(1);
  };

  return (
    <StyledDiv className="alert alert-secondary" key={_id}>
      {capitalize(name)}
      <StyledIconsContainer>
        <span>
          <StyledDeleteIcon
            className="text-danger"
            onClick={() => handleDelete(slug)}
          />
        </span>
        <Link to={`/admin/category/${slug}`}>
          <EditOutlined />
        </Link>
      </StyledIconsContainer>
    </StyledDiv>
  );
};

const StyledDiv = styled.div`
  width: 80%;
  font-size: 20px;
  display: flex;
`;

const StyledDeleteIcon = styled(DeleteOutlined)`
  margin-right: 20px;
`;

const StyledIconsContainer = styled.div`
  margin-left: auto;
`;

export default withRouter(Categories);
