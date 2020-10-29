import React from "react";
import LeftNav from "../../component/nav/LeftNav";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <LeftNav />
        </div>
        <div className="col">Admin page</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
