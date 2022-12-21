import * as at from './actionTypes';

// EMPLOYEE ACTIONS
export const fetchAllEmployees = (employees) => {
  return {
    type: at.FETCH_ALL_EMPLOYEES,
    payload: employees
  };
};

export const fetchEmployee = (employee) => {
  return {
    type: at.FETCH_EMPLOYEE,
    payload: employee
  };
}

export const editEmployee = (employee) => {
  return {
    type: at.EDIT_EMPLOYEE,
    payload: employee
  };
}

// TASK ACTIONS
export const fetchAllTasks = (tasks) => {
    return {
      type: at.FETCH_ALL_TASKS,
      payload: tasks
    };
  };

export const fetchTask = (task) => {
  return {
    type: at.FETCH_TASK,
    payload: task
  };
};

export const editTask = (task) => {
  return {
    type: at.EDIT_TASK,
    payload: task,
  };
};