import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoute = ({ user, loading }) => {
  if (user && loading === false) { 
    console.log("I am outlet");
    console.log("protected user outlet : ",user)
    return <Outlet />;
  }
  if (!user && loading === false) {
    console.log("I am home");
    console.log("protected user home : ",user)
    return <Navigate to="/" />;
  }
};
