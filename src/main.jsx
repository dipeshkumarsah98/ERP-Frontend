import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SnackbarProvider } from "notistack";
import { UserProvider } from "./store/Context/UserContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: "right", vertical: "top" }}
    >
      <UserProvider>
        <App />
      </UserProvider>
    </SnackbarProvider>
  </React.StrictMode>
);
