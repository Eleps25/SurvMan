import Dashboard from "./Components/Dashboard/index";
import Login from "./Components/Login/index";
import Questionaires from './Components/Questionnaires/index';
import Users from './Components/Users/index';
import { Route, Routes } from "react-router-dom";


const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/questionnaire-manager" element={<Questionaires />} />
        <Route exact path="/user-manager" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
