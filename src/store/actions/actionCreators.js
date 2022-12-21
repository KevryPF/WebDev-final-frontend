import * as at from './actionTypes';

export const fetchAllEmployees = (employees) => {
  return {
    type: at.FETCH_ALL_EMPLOYEES,
    payload: employees,
  };
};

export const fetchAllTasks = (tasks) => {
    return {
      type: at.FETCH_ALL_TASKS,
      payload: tasks,
    };
  };