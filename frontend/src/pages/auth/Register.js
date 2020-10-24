import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase";
import Toast from "../../component/common/Toast";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const { user } = useSelector((state) => ({ ...state }));

  useEffect(() => {
    if (user && user.token) {
      history.push("/");
    }
  }, [user]);

  const saveEmailLocalStorage = () => {
    window.localStorage.setItem("emailForRegistration", email);
    setEmail("");
  };

  // to send link after registeration to user mail.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };

    await auth
      .sendSignInLinkToEmail(email, config)
      .then(() => {
        Toast(
          "success",
          `Email is send to ${email}. Please click on the provided link to complete registration.`
        );
        saveEmailLocalStorage();
      })

      //save email to local storage.
      .catch((err) => {
        Toast("error", "Please provide a valid Email");
        setEmail("");
      });
  };

  const registerForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mt-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          autoFocus
          required
          placeholder="Enter your email"
        />

        <StyledButton
          type="submit"
          disabled={email ? false : true}
          className="btn btn-raised mt-4"
        >
          Register
        </StyledButton>
      </form>
    );
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <StyledText> Register</StyledText>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

const StyledButton = styled.button`
  &:disabled {
    cursor: not-allowed;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`;

const StyledText = styled.h4`
  font-size: 30px;
`;

export default Register;
