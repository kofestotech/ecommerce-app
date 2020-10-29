import React from "react";
import LeftNav from "../../component/nav/LeftNav";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="colmd-2">
          <LeftNav />
        </div>
        <div className="col">userPage</div>
      </div>
    </div>
  );
};

export default Dashboard;
