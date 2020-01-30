import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Form extends React.Component {
  SubmitHandler = event => {
    event.preventDefault();
    if (
      this.props.usr.username === event.target.username.value &&
      this.props.usr.password === event.target.password.value
    ) {
      this.props.history.push("/Employee");
    } else {
      alert(
        "You are submitting Invalid details,please try with valid credentials"
      );
    }
  };
  render() {
    return (
      <div className="container">
        <h1>Welcome to Login Page</h1>
        <form onSubmit={this.SubmitHandler} className="frm">
          <div className="form-row">
            <div className="col">
              <strong>
                <p>Enter your Username:</p>
              </strong>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="username is hruday@gmail.com"
              ></input>
            </div>
          </div>
          <br></br>
          <div className="form-row">
            <div className="col">
              <strong>
                <p>Enter your Password:</p>
              </strong>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password is hruday123"
              ></input>
            </div>
          </div>

          <br></br>
          <input type="submit" className="btn btn-primary" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    usr: state.log
  };
};
export default withRouter(connect(mapStateToProps)(Form));
