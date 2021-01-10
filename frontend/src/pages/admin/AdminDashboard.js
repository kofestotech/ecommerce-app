import React from "react";
import AdminLeftNav from "../../component/nav/AdminLeftNav";
import styled from "styled-components";

const AdminDashboard = () => {
  return (
    <div className="container-fluid">
      <StyledDiv className="row">
        <div className="col-md-2">
          <AdminLeftNav />
        </div>
        <div className="col">Admin page</div>
      </StyledDiv>
    </div>
  );
};

const StyledDiv = styled.div`
  margin-top: 50px !important;
  margin-left: 10px !important;
`;

export default AdminDashboard;
