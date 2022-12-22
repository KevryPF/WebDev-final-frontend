import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task, deleteTask } = props;

  return (
    <div>
        <h1>{task.description}</h1>
        <h3>Assigned Employee: {task.employee ? 
        <Link to={`/employee/${task.employee.id}`}>
            <h4>{task.employee.firstname + " " + task.employee.lastname}</h4>
        </Link>
        : "Unassigned"}</h3>
        <h3>Priority Level: {task.prioritylevel}</h3>
        <h3>Completion Status: {task.completionstatus ? "Complete" : "Incomplete"}</h3>
        <Link to={`/edittask/${task.id}`}>Edit task information</Link>
        <br/>
        <Link to={`/tasks`}>View all tasks</Link>
        <div>        
            <Link to={`/tasks`}>
                <button onClick={() => deleteTask(task.id)} className="regularBtn">Delete Task</button>
            </Link>
        </div>

    </div>
  );

};

export default TaskView;