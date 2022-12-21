import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { fetchTaskThunk, fetchEmployeeThunk } from "../../store/thunks";
import TaskView from "../views/TaskView";

//Added this from https://stackoverflow.com/questions/69967745/react-router-v6-access-a-url-parameter 
//because react-router v6 doesn't have route props
const withRouter = WrappedComponent => props => {
  const params = useParams();
  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};

class TaskContainer extends Component {
  componentDidMount() {
    //getting task ID from url
    this.props.fetchEmployee(this.props.params.id);
    this.props.fetchTask(this.props.params.id);
  }

  render() {
    return (
      <TaskView 
        task={this.props.task}
        employee={this.props.employee}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    task: state.task,
    employee: state.employee
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchTask: (id) => dispatch(fetchTaskThunk(id)),
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id))
  };
};

export default withRouter(connect(mapState, mapDispatch)(TaskContainer));