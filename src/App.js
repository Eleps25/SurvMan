import Dashboard from "./Dashboard";
import Login from "./Login.js";
import Questionaires from './Questionaires';
import Users from './Users';
import { Route, Routes } from "react-router-dom";


function App() {
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
