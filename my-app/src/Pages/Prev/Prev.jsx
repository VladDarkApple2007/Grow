import React from "react";
import "./prev.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Prev() {
  const navigate = useNavigate();
  const handleEnter = () => {
    // Тут можна додати логіку переходу на головну сторінку
    toast.success("Welcome to the site!");
    navigate("/");
    // window.location.href = "/main"; // для фактичного переходу
  };

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to my website!</h1>
        <p className="welcome-text">
          Glad to see you here. This is a space where you will find useful
          information and interesting materials.
        </p>
        <button className="enter-button" onClick={handleEnter}>
          Login to the site
          <span className="arrow">→</span>
        </button>
      </div>
      <div className="decoration">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
      </div>
    </div>
  );
}
