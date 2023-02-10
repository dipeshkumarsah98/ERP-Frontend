import React, { useState, useContext } from "react";
import "./App.css";
import Login from "./components/login/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./Helper/ProtectRoute/ProtectedRoute";
import { UserContext } from "./store/Context/UserContext";
import { Assignment } from "./components/assignment";
import Library from "./components/Library/Library";
import Index from "./page/Index";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./components/dashboard/Dashboard";
import Accounting from "./components/Accounting/Accounting";
import Exam from "./components/exam/Exam";
import Course from "./components/Course/Course";
function App() {
  const { userData, setUserData, userLoading, setUserLoading } =
    useContext(UserContext);
  console.log(" I am sending user ", userData);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<Index />}>
            <Route path="home" element={<Dashboard />} />
            <Route path="assignment" element={<Assignment />} />
            <Route path="library" element={<Library />} />
            <Route path="account" element={<Accounting />} />
            <Route path="result" element={<Exam />} />
            <Route path="course" element={<Course />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
