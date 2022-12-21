import * as ac from './actions/actionCreators';
import axios from 'axios';

let path = "http://localhost:5001/api";

export const fetchAllEmployeesThunk = () => async (dispatch) => {
  try {
    let res = await axios.get(`${path}/employees`);
    dispatch(ac.fetchAllEmployees(res.data));
  } catch(err) {
    console.error(err);
  }
};

export const fetchAllTasksThunk = () => async (dispatch) => {
    try {
      let res = await axios.get(`${path}/tasks`);
      dispatch(ac.fetchAllTasks(res.data));
    } catch(err) {
      console.error(err);
    }
  };