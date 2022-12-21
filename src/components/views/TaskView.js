import { Link } from "react-router-dom";

const TaskView = (props) => {
  const {task, employee } = props;

  return (
    <div>
        <h1>{task.description}</h1>
        <h3>Assigned Employee: {task.employee ? 
        <Link to={`/employee/${employee.id}`}>
            <h4>{employee.firstname + " " + employee.lastname}</h4>
        </Link>
        : "staff"}</h3>
        <h3>Priority Level: {task.prioritylevel}</h3>
        <h3>Completion Status: {task.completionstatus ? "Complete" : "Incomplete"}</h3>
        <Link to={`/edittask/${task.id}`}>Edit task information</Link>
        <br/>
        <Link to={`/tasks`}>View all tasks</Link>
    </div>
  );

};

export default TaskView;