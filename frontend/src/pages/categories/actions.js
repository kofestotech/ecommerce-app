import axios from "axios";
import Toast from "../../component/common/Toast";

const CATEGORY_URL = `${process.env.REACT_APP_API}/categories`;

export const getAllCategories = async () => {
  const response = await axios.get(CATEGORY_URL);
  return response;
};

export const getCategory = async (slug) => {
  const { success = false, data = {}, message = "" } = await axios.get(
    `${CATEGORY_URL}/${slug}`
  );
  if (success) {
    return { data, success };
  } else {
    return { message, success };
  }
};

export const removeCategory = async (slug, authToken) => {
  const {
    data: { success = false, message = "" },
  } = await axios.delete(`${CATEGORY_URL}/${slug}`, {
    headers: {
      authToken,
    },
  });
  if (success) {
    Toast("success", message);
    return { success };
  }
  Toast("error", message);
  return { success };
};

export const createCategory = async (categoryName, authToken) => {
  const { data } = await axios.post(
    `${CATEGORY_URL}/${categoryName}`,
    { category: categoryName },
    {
      headers: {
        authToken,
      },
    }
  );
  const { success = false, category = {}, message = "" } = data;
  if (success) {
    Toast("success", "Category created successfully");
    return { category, success };
  }
  Toast("error", message);
  return { success };
};

export const updateCategory = async (slug, authToken) => {
  const { success = false, message = "", data } = await axios.put(
    `${CATEGORY_URL}/${slug}`,
    {
      headers: {
        authToken,
      },
    }
  );
  if (success) {
    Toast("success", message);
    return { data, success };
  }
  Toast("error", message);
  return { success };
};
