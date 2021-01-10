import React, { useState, useEffect } from "react";
import AdminLeftNav from "../../../component/nav/AdminLeftNav";
import Toast from "../../../component/common/Toast";
import { useSelector } from "react-redux";
import Categories from "./index";
import {
  getAllCategories,
  getCategory,
  createCategory,
  removeCategory,
  updateCategory,
} from "../../categories/actions";
import Form from "./form";
import styled from "styled-components";

const CreateCategory = () => {
  const { user } = useSelector((state) => ({ ...state }));
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchAllCategories();
  }, []);

  const fetchAllCategories = async () => {
    const { data } = await getAllCategories();
    if (data.success) {
      setCategories(data.categories);
    }
  };

  const handleCreate = async (name) => {
    const { success } = await createCategory(name, user.token);
    if (success) {
      fetchAllCategories();
    }
  };

  const handleDelete = async (slug) => {
    const { success } = await removeCategory(slug, user.token);
    if (success) {
      fetchAllCategories();
    }
  };

  return (
    <div className="container-fluid">
      <StyledDiv className="row">
        <div className="col-sm-2">
          <AdminLeftNav />
        </div>
        <div className="col-sm-6">
          <Form createCategory={handleCreate} />
        </div>
        <div className="col">
          <StyledText>{categories.length} Categories</StyledText>
          {categories.map((category) => (
            <Categories
              category={category}
              key={category._id}
              handleDelete={handleDelete}
            />
          ))}
        </div>
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  margin-top: 50px !important;
  margin-left: 10px !important;
`;

const StyledText = styled.div`
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`;

export default CreateCategory;
