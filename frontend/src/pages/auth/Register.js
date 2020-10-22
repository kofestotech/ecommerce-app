import React, { useState } from "react";
import { auth } from "../../Firebase";
import Toast from "../../component/common/Toast";
import Home from "../Home";

const Register = () => {
  const [email, setEmail] = useState("");

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
        />

        <button
          type="submit"
          disabled={email ? false : true}
          className="btn btn-raised mt-4"
        >
          Register
        </button>
      </form>
    );
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h4 className="font-weight-bold"> Please Enter Your Email</h4>
          {registerForm()}
        </div>
      </div>
    </div>
  );
};

export default Register;
