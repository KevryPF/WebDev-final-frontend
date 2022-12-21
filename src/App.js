import "./App.css";
import { Routes, Route } from "react-router-dom";
import {
  AllEmployeesContainer,
  AllTasksContainer,
  HomePageContainer,
  NavbarContainer
} from './components/containers';

const App = () => {
  return (
    <div className="App">
      <NavbarContainer></NavbarContainer>
        <Routes>
          <Route exact path="/" element={<HomePageContainer/>} />
          <Route exact path="/employees" element={<AllEmployeesContainer/>} />
          <Route exact path="/tasks" element={<AllTasksContainer/>} />
        </Routes>
    </div>
  );
}

export default App;
