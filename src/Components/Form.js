import React from "react";
import { connect } from "react-redux";

class Form extends React.Component {
  SubmitHandler = event => {
    event.preventDefault();
    if (
      this.props.usr.username === event.target.username.value &&
      this.props.usr.password === event.target.password.value
    ) {
      alert("You are submitting valid details");
    } else {
      alert(
        "You are submitting Invalid details,please try with valid credentials"
      );
    }
  };
  render() {
    return (
      <form onSubmit={this.SubmitHandler}>
        <h1></h1>
        <p>Enter your Username:</p>
        <input type="text" name="username"></input>
        <br></br>
        <p>Enter your Password:</p>
        <input type="password" name="password"></input>
        <br></br>
        <input type="submit" />
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    usr: state.log
  };
};
export default connect(mapStateToProps)(Form);
