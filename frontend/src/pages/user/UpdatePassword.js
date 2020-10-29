import React, { useState } from "react";
import LeftNav from "../../component/nav/LeftNav";
import { auth } from "../../Firebase";
import Toast from "../../component/common/Toast";
import styled from "styled-components";

const UpdatePassword = ({ history }) => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const validatePasswords = () => {
    if (password === confirmPassword) {
      return true;
    }
    return false;
  };

  const updatePasswordForm = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const isPasswordMatched = validatePasswords();
      if (!isPasswordMatched) {
        Toast("error", "Password don't mathced.");
        return;
      }
      await auth.currentUser
        .updatePassword(password)
        .then(() => {
          Toast("success", "Password updated successfully");
          history.pushState("/user/dashboard");
        })
        .catch((err) => {
          Toast("error", "Please login again and update the password");
        });
    };
    return (
      <StyledForm onSubmit={handleSubmit}>
        <StyledHeading>Update Password</StyledHeading>
        <div className="form-group">
          <StyledLabel>Enter New Password</StyledLabel>
          <StyledInput
            type="password"
            className="form-control mt-1 mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="New Password"
            minLength="6"
          />
          <StyledLabel>Confirm New Password</StyledLabel>
          <StyledInput
            type="password"
            className="form-control mt-1"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
            placeholder="Confirm Password"
            minLength="6"
          />
          <StyledButton
            type="submit"
            className="btn btn-primary mt-4"
            disabled={
              !(password && confirmPassword) ||
              password.length < 6 ||
              confirmPassword.length < 6
            }
          >
            Submit
          </StyledButton>
        </div>
      </StyledForm>
    );
  };

  return (
    <StyledDiv className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <LeftNav />
        </div>
        <div className="col">{updatePasswordForm()}</div>
      </div>
    </StyledDiv>
  );
};

const StyledForm = styled.form`
  background: rgba(202, 202, 202, 0.2);
  width: 90%;
  padding: 50px;
  padding-left: 120px;
  border-radius: 5px;
  height: 80vh;
  line-height: 50px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
`;

const StyledLabel = styled.label`
  font-size: 18px;
`;

const StyledHeading = styled.h3`
  margin-bottom: 20px;
`;

const StyledDiv = styled.div`
  margin-top: 30px;
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

export default UpdatePassword;
