import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  AllEmployeesContainer,
  AllTasksContainer,
  HomePageContainer,
  NavbarContainer,
  EmployeeContainer,
  TaskContainer,
  EditTaskContainer
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
        </Routes>
    </div>
  );
}

export default App;
