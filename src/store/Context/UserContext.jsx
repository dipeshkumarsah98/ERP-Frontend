import React, { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);
  const [userLoading, setUserLoading] = useState(false);

  useEffect(() => {
    setUserLoading(true);
    if (localStorage.getItem("userData")) {
      setUserData(JSON.parse(localStorage.getItem("userData")));
    }
    setUserLoading(false);
  }, []);

  useEffect(() => {
    if (!userLoading) {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData, userLoading]);

  return (
    <UserContext.Provider
      value={{ userData, setUserData, userLoading, setUserLoading }}
    >
      {children}
    </UserContext.Provider>
  );
};
