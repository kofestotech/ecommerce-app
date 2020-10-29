import axios from "axios";

const VALIDATE_TOKEN_URL = `${process.env.REACT_APP_API}/user/validate`;
const LOGGED_IN_USER_URL = `${process.env.REACT_APP_API}/current-user`;

export const createOrUpdateUser = async ({ authtoken }) => {
  return await axios.post(
    VALIDATE_TOKEN_URL,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};

export const getLoggedInUser = async ({ authtoken }) => {
  return await axios.post(
    LOGGED_IN_USER_URL,
    {},
    {
      headers: {
        authtoken,
      },
    }
  );
};
