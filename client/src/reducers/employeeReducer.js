import { GET_EMPLOYEES, ADD_EMPLOYEE, DELETE_EMPLOYEE } from "../actions/types";

const initialState = {
  employees: []
};

const employeeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_EMPLOYEES:
      return {
        ...state,
        employees: action.payload
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        employees: state.employees.filter(emp => emp._id !== action.payload)
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        employees: [action.payload, ...state.employees]
      };
    default:
      return state;
  }
};

export default employeeReducer;
