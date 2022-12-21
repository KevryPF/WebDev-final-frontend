import * as ac from './actions/actionCreators';
import axios from 'axios';

let path = "http://localhost:5001/api";

// EMPLOYEE THUNKS
export const fetchAllEmployeesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees`);
    dispatch(ac.fetchAllEmployees(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const fetchEmployeeThunk = (id) => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees/${id}`);
    dispatch(ac.fetchEmployee(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const editEmployeeThunk = employee => async dispatch => {
  try {
    let res = await axios.put(`${path}/employees/${employee.id}`, employee);
    dispatch(ac.editEmployee(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const addEmployeeThunk = (employee) => async (dispatch) => {
  try {
    let res = await axios.post(`${path}/employees`, employee);
    dispatch(ac.addEmployee(res.data));
    return res.data;
  } catch(err) {
    console.error(err);
  }
};

// TASK THUNKS
export const fetchAllTasksThunk = () => async (dispatch) => {
    try {
      let res = await axios.get(`${path}/tasks`);
      dispatch(ac.fetchAllTasks(res.data));
    } catch(err) {
      console.error(err);
    }
  };

  export const fetchTaskThunk = id => async dispatch => {
    try {
      let res = await axios.get(`${path}/tasks/${id}`);
      dispatch(ac.fetchTask(res.data));
    } catch(err) {
      console.error(err);
    }
  };

  export const editTaskThunk = task => async dispatch => {
    try {
      let res = await axios.put(`${path}/tasks/${task.id}`, task);
      dispatch(ac.editTask(res.data));
    } catch(err) {
      console.error(err);
    }
  };

  export const addTaskThunk = (task) => async (dispatch) => {
    try {
      let res = await axios.post(`${path}/tasks`, task);
      dispatch(ac.addTask(res.data));
      return res.data;
    } catch(err) {
      console.error(err);
    }
  };