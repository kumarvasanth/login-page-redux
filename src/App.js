import React from "react";
import Navbar from "./Components/Navbar";
import Form from "./Components/Form";
import EmployeeList from "./Components/Employee";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/" exact component={Form}></Route>
        <Route path="/Employee" component={EmployeeList}></Route>
      </Switch>
    </div>
  );
}

export default App;
