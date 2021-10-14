import React from 'react';
import {Link} from 'react-router-dom'

const EmployeeTable = ({ employee }) => {
        
    return(
      <div className="card-body">
          <Link to={"addEmployee"} className ="btn btn-secondary mb-3"> Add <i className="fas fa-plus-circle"></i> </Link>
        <table className="table table-bordered">
            <thead>
            <tr>
                <th style={{width: 10}}>#</th>
                <th>Firstname</th>
                <th>Lastname</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1.</td>
                <td>Delio </td> 
                <td>Tablang</td>
            </tr>
            </tbody>
        </table>
    </div>

    );
}

export default EmployeeTable;