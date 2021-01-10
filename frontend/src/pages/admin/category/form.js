import React, { useState } from "react";
import styled from "styled-components";
import Categories from "./index";

const Form = (props) => {
  const [categoryName, setCategoryName] = useState("");
  const { createCategory, categories } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    createCategory(categoryName);
    setCategoryName("");
  };

  const showButton = () => {
    if (categoryName === "") {
      return true;
    }
    return false;
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div className="form-group">
        <StyledHeading>Create New Category</StyledHeading>
        <StyledLabel>Category Name</StyledLabel>
        <StyledInput
          type="text"
          className="form-control"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          required
          autoFocus
        />
        <StyledButton
          type="submit"
          className="btn btn-primary mt-4"
          disabled={showButton()}
        >
          Save Category
        </StyledButton>
      </div>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  background: rgba(202, 202, 202, 0.2);
  padding: 50px;
  padding-left: 120px;
  border-radius: 5px;
  line-height: 50px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const StyledHeading = styled.h3`
  margin-bottom: 20px;
  font-weight: 600;
`;

const StyledLabel = styled.label`
  font-size: 18px;
`;

const StyledInput = styled.input`
  width: 500px;
`;

const StyledButton = styled.button`
  background-color: white !important;
  color: black;
  font-size: 16px;
  transition: all 0.2s;
  border-radius: 5px;
  &:disabled {
    cursor: not-allowed;
  }

  &:hover:disabled {
    color: rgba(0, 0, 0, 0.26);
  }

  &:hover:enabled {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  }

  &:active {
    transform: translateY(1px);
  }
`;

export default Form;
