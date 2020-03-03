import axios from "axios";

import { GET_EMPLOYEES, ADD_EMPLOYEE, DELETE_EMPLOYEE } from "./types";

export const getEmployees = () => async dispatch => {
  await axios.get("/api/items").then(res =>
    dispatch({
      type: GET_EMPLOYEES,
      payload: res.data
    })
  );
};

export const deleteEmployee = id => async dispatch => {
  await axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_EMPLOYEE,
      payload: id
    })
  );
};

export const addEmployee = employee => async dispatch => {
  await axios.post(`/api/items/`, employee).then(res =>
    dispatch({
      type: ADD_EMPLOYEE,
      payload: employee
    })
  );
};
