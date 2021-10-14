import React from 'react';
import {Link} from 'react-router-dom'

const EmployeeTable = ({ companies }) => {
        
    return(
      <div className="card-body">
          <Link to={"addEmployee"} className ="btn btn-secondary mb-3"> Add <i className="fas fa-plus-circle"></i> </Link>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th style={{width: 10}}>#</th>
                <th>Logo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1.</td>
                <td> <img src="https://icon-library.com/images/default-user-icon/default-user-icon-4.jpg" alt="profile" width = "20" height ="20" class="rounded-circle" /></td> 
                <td> A plus </td>
                <td> aplus@aplus.com</td>
                <td> 09097677516</td>
            </tr>
            </tbody>
        </table>
    </div>

    );
}

export default EmployeeTable;