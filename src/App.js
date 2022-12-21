import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  AllEmployeesContainer,
  AllTasksContainer,
  HomePageContainer,
  NavbarContainer,
  EmployeeContainer,
  TaskContainer,
  EditTaskContainer,
  EditEmployeeContainer,
  NewTaskContainer,
  NewEmployeeContainer
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <NavbarContainer></NavbarContainer>
        <Routes>
          <Route exact path="/" element={<HomePageContainer/>} />
          <Route exact path="/employees" element={<AllEmployeesContainer/>} />
          <Route exact path="/employee/:id" element={<EmployeeContainer/>} />
          <Route exact path="/tasks" element={<AllTasksContainer/>} />
          <Route exact path="/task/:id" element={<TaskContainer/>} />
          <Route exact path="/edittask/:id" element={<EditTaskContainer/>} />
          <Route exact path="/editemployee/:id" element={<EditEmployeeContainer/>} />
          <Route exact path="/newtask" element={<NewTaskContainer/>} />
          <Route exact path="/newemployee" element={<NewEmployeeContainer/>} />
        </Routes>
    </div>
  );
}

export default App;
