import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import Toast from "../component/common/Toast";
import { useSelector } from "react-redux";
import { currentAdmin } from "../pages/auth/actions";

const AdminRoutes = ({ children, ...rest }) => {
  const { user } = useSelector((state) => ({ ...state }));
  const [isAdmin, setIsAdmin] = useState(false);
  let role = user.role;

  useEffect(() => {
    async function fetchData() {
      if (user && user.token) {
        const response = await currentAdmin({ authtoken: user.token });
        if (response && response.error) {
          Toast("error", response.message);
          role = "subscriber";
          return;
        } else {
          setIsAdmin(true);
        }
      }
    }
    fetchData();
  }, [user]);

  return role === "admin" ? <Route {...rest} /> : <Redirect to="/login" />;
};

export default AdminRoutes;
