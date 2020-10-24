import React, { useState, useEffect } from "react";
import { Button } from "antd";
import styled from "styled-components";
import { auth } from "../../Firebase";
import Toast from "../../component/common/Toast";
import { useSelector } from "react-redux";

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("sachinst000@gmail.com");
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth
      .sendPasswordResetEmail(email, config)
      .then(() => {
        setEmail("");
        Toast(
          "success",
          "Password reset link is sent to your registered email address."
        );
      })
      .catch((err) => Toast("error", err.message));
  };

  return (
    <div className="container col-md-6 offset-md-3 p-5">
      <h4>Forgot Password</h4>

      <form onSubmit={() => handleSubmit}>
        <input
          type="email"
          className="form-control mt-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          required
          placeholder="Email"
        />
        <StyledButton onClick={handleSubmit} disabled={!email}>
          Submit
        </StyledButton>
      </form>
    </div>
  );
};

const StyledButton = styled(Button)`
  margin-top: 30px;
  width: 100px;
  height: 32px;
  padding: 0px;
  border-radius: 5px;
  transition: all 0.2s;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.5);
  > span {
    text-align: center;
    font-size: 18px;
  }
  &:disabled {
    cursor: not-allowed;
  }
`;

export default ForgotPassword;
