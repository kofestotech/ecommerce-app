import axios from "axios";

const CATEGORY_URL = `${process.env.REACT_APP_API}/categories`;

export const getAllCategories = async () => {
  const response = await axios.get(CATEGORY_URL);
  return response;
};

export const getCategory = async (slug) => {
  const {success = false, data = {}, message=""} = await axios.get(`${CATEGORY_URL}/${slug}`);
  if(success) {
    return {data, success};
  }
  else {
    return {message, success};
  }
}

export const removeCategory = async (slug, authToken) => {
  const {success = false, message=""} = await axios.delete(`${CATEGORY_URL}/${slug}`, {
    headers: {
      authToken
    }
  });
  if(success) {
    Toast(
      "success", message
    );
    return {success};
  }
  Toast(
    "error",message
  );
  return {success};
};

export const createCategory = async (slug, category, authToken) => {
  const {success = false, message=""} = await axios.post(`${CATEGORY_URL}/${slug}`, category, {
    headers: {
      authToken
    }
  });
  if(success) {
    Toast(
      "success", message
    );
    return {data, success};
  }
  Toast(
    "error", message
  );
  return {success};
};

export const updateCategory = async (slug, authToken) => {
  const {success = false, message=""} = await axios.put(`${CATEGORY_URL}/${slug}`, {
    headers: {
      authToken
    }
  });
  if(success) {
    Toast(
      "success", message
    );
    return {data, success};
  }
  Toast(
    "error", message
  );
  return {success};
};