import { Link } from "react-router-dom";

const EmployeeView = (props) => {
  const {employee, editTask ,allTasks, deleteEmployee} = props;
  let assignedTasks = allTasks.filter(task => task.employeeId===employee.id);
  let availableTasks = allTasks.filter(task => task.employeeId!==employee.id);
  
  return (
    <div>      
      <h1>{employee.firstname + ' ' + employee.lastname}</h1>
      <h3>{employee.department}</h3>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-evenly"}}>
        <div>Assigned tasks:
        {assignedTasks.length > 0 ? assignedTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`} style={{float:'left'}}>
              <h4>{task.description}</h4>
            </Link>
            <button onClick={() => editTask({id:task.id, employeeId: null})} style={{float:'right'}}>x</button>
            </div> 
          ); 
        }) : <p>No assigned tasks</p>}
        </div>
        
        <div>Available tasks:
        {availableTasks.map( task => {
          return (
            <div key={task.id}>
            <Link to={`/task/${task.id}`} style={{float:'left'}}>
              <h4>{task.description}</h4>
            </Link>
            <button onClick={() => editTask({id:task.id, employeeId: employee.id})} style={{float:'right'}}>+</button>
            </div>
          );
        })}</div>
      </div>
        <Link to={`/editemployee/${employee.id}`}>Edit employee information</Link>
        <div>
        <Link to={`/employees`}>
            <button onClick={() => deleteEmployee(employee.id)} className="regularBtn">Delete Employee</button>
        </Link>
        </div>
  
    </div>
  );

};

export default EmployeeView;