import React, { useState, useContext } from "react";
import "./App.css";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./Helper/ProtectRoute/ProtectedRoute";
import { UserContext } from "./store/Context/UserContext";

function App() {
  const { userData, setUserData, userLoading, setUserLoading } =
    useContext(UserContext);
  console.log(" I am sending user ", userData);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          {userData && (
            <Route 
              element={<ProtectedRoute user={userData} loading={userLoading} />}
            >
              <Route path="/home" element={<Dashboard />} />
            </Route>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
