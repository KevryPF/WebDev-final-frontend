import { FETCH_TASK, DELETE_TASK} from "../actions/actionTypes";

const initialState = {
  employee: {},
};

const task = (state=initialState, action) => {
  switch (action.type) {
    case FETCH_TASK:
        return action.payload;
    case DELETE_TASK:
        return state.filter(task => task.id!==action.payload);
    default:
        return state;
  }
};

export default task;