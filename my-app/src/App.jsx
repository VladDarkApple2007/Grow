import React from "react";
import "./Style.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter.jsx";
import ToastConfig from "./Component/ToastConfig/ToastConfig.jsx";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <AppRouter/>
      </Router>
      <ToastConfig/>
    </React.StrictMode>
  );
}

export default App;
