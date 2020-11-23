import axios from "axios";

const CATEGORY_URL = `${process.env.REACT_APP_API}/categories`;

export const getAllCategories = async () => {
  const response = await axios.get(CATEGORY_URL);
  return response;
};
