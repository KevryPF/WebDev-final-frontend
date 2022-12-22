import React, { Component } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router";
import { 
  fetchEmployeeThunk,
  fetchAllTasksThunk,
  deleteEmployeeThunk,
  editTaskThunk
} from "../../store/thunks";

import EmployeeView from "../views/EmployeeView";

const withRouter = WrappedComponent => props => {
  const params = useParams();
  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};

class EmployeeContainer extends Component {
  componentDidMount() {
    this.props.fetchEmployee(this.props.params.id);
    this.props.fetchTasks();
  }

  render() {
    return (
      <EmployeeView 
        employee={this.props.employee}
        allTasks={this.props.allTasks}
        editTask={this.props.editTask}
        deleteEmployee={this.props.deleteEmployee}
      />
    );
  }
}

//map state to props
const mapState = (state) => {
  return {
    employee: state.employee,
    allTasks: state.allTasks,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchEmployee: (id) => dispatch(fetchEmployeeThunk(id)),
    fetchTasks: () => dispatch(fetchAllTasksThunk()),
    deleteEmployee: (employeeId) => dispatch(deleteEmployeeThunk(employeeId)),
    editTask: (task) => dispatch(editTaskThunk(task))
  };
};

export default withRouter(connect(mapState, mapDispatch)(EmployeeContainer));