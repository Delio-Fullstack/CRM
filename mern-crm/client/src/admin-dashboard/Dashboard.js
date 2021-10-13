import React, {useState, useEffect } from 'react';
import {employeeApi}  from 'Services/ApiServices';
import EmployeeTable from 'admin-dashboard/employee/EmployeeTable';
//import $ from 'jquery'; 

const Dashboard = () => {
    const [employee, setEmployee ] = useState();

    //get Employee data 

    
    return(  
      <><div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Dashboard v3</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item"><a href="!#">Home</a></li>
                    <li className="breadcrumb-item active">Dashboard v3</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        <div className="content">
          <div className="container-fluid">
              <div className="row">
                <EmployeeTable />

              </div>
            </div>
          </div>
        </div> 
      </>
    );
}

export default Dashboard;