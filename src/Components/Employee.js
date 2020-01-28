import React from "react";
import { connect } from "react-redux";
import "../App.css";

class Employee extends React.Component {
  render() {
    return (
      <table className="tabl">
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>PhoneNumber</th>
        </tr>
        {this.props.employee.map(emp => {
          return (
            <tr key={emp.id}>
              <td>{emp.id}</td>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>{emp.gender}</td>
              <td>{emp.email}</td>
              <td>{emp.phoneNo}</td>
            </tr>
          );
        })}
      </table>
    );
  }
}

const mapStoreToprops = state => {
  return {
    employee: state.employeeList
  };
};
export default connect(mapStoreToprops)(Employee);
