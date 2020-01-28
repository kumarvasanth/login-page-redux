import { login } from "../login";
import { user } from "../EmployeeList";

const initialState = {
  log: login,
  employeeList: user
};

const reducer = (state = initialState, action) => {
  return state;
};
export default reducer;
