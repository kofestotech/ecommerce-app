import React, { useEffect } from "react";
import Routes from "./routes";
import Header from "./component/nav/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // getting logged in user from firebase and then storing in user reducer
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        // JWT token assigned to logged in user
        const idTokenResult = await user.getIdTokenResult();
        dispatch({
          type: "LOGGED_IN_USER",
          payload: {
            email: user.email,
            token: idTokenResult.token,
          },
        });
      }
    });
    // cleanup to avoid memory leaks
    return () => unsubscribe();
  }, []);

  return (
    <div className="App">
      <Header />
      <ToastContainer />
      <Routes />
    </div>
  );
};

export default App;
