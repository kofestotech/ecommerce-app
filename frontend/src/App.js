import React, { useEffect } from "react";
import Routes from "./routes/Routes";
import Header from "./component/nav/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { auth } from "./Firebase";
import { getLoggedInUser } from "./pages/auth/actions";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // getting logged in user from firebase and then storing in user reducer
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        // JWT token assigned to logged in user
        const idTokenResult = await user.getIdTokenResult();
        getLoggedInUser({ authtoken: idTokenResult.token })
          .then((response) => {
            dispatch({
              type: "LOGGED_IN_USER",
              payload: {
                name: response.data.name,
                email: response.data.email,
                token: idTokenResult.token,
                role: response.data.role,
                _id: response.data._id,
              },
            });
          })
          .catch((err) => console.log(err));
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
