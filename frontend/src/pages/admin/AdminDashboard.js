import React from "react";
import AdminLeftNav from "../../component/nav/AdminLeftNav";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <AdminLeftNav />
        </div>
        <div className="col">Admin page</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
