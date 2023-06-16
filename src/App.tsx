import React from "react";
import Dashboard from "./Components/Dashboard/index";
import Login from "./Components/Login/index";
import Questionaires from './Components/Questionnaires/index';
import Users from './Components/Users/index';
import { Route, Routes } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/questionnaire-manager" element={<Questionaires />} />
        <Route path="/user-manager" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;
