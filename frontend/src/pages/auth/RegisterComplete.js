import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase";
import Toast from "../../component/common/Toast";
import { useDispatch } from "react-redux";
import { createOrUpdateUser } from "./actions";

const RegisterComplete = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { history } = props;
  const dispatch = useDispatch();

  useEffect(() => {
    const emailForRegistration = window.localStorage.getItem(
      "emailForRegistration"
    );
    if (emailForRegistration) {
      setEmail(emailForRegistration);
    }
  }, []);

  // to send link after registeration to user mail.
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      Toast("error", "Password must contain atleast 6 characters");
      return;
    }
    try {
      const result = await auth.signInWithEmailLink(
        email,
        window.location.href
      );
      if (result.user.emailVerified) {
        // remove user mail from local storage.
        window.localStorage.removeItem("emailForRegistration");
        //get currently logged in user
        let user = auth.currentUser;
        // user will enter password while completing registration so we are saving the password.
        await user.updatePassword(password);
        // get user token
        const idTokenResult = user.getIdTokenResult();

        // store user details in redux store
        createOrUpdateUser({ authtoken: idTokenResult.token })
          .then((response) => {
            const { user } = response.data;
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: user.name,
                email: user.email,
                token: idTokenResult.token,
                role: user.role,
                _id: user._id,
              },
            });
          })
          .catch((err) => console.log(err));
        history.push("/");
      }
    } catch (error) {
      Toast("error", "Link is expired. Please register again");
    }
  };

  const registrationCompleteForm = () => {
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          className="form-control mt-4"
          value={email}
          disabled
        />

        <input
          type="password"
          className="form-control mt-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          autoFocus
          required
        />

        <button
          type="submit"
          disabled={password ? false : true}
          className="btn btn-raised mt-4"
        >
          Complete Registeration
        </button>
      </form>
    );
  };

  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 ">
          <h4 className="font-weight-bold">Complete Your Registeration</h4>
          {registrationCompleteForm()}
        </div>
      </div>
    </div>
  );
};

export default RegisterComplete;
