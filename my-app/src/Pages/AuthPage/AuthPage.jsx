import { useNavigate } from "react-router-dom";
import "./components/Auth/auth.css";
import { useAuth } from "../../hooks/useAuth";
import Auth from "./components/Auth/Auth";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AuthPage() {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(username, password);
    if (success) {
      navigate("/");
    } else {
      toast.error("Incorrect data");
    }
  };
  return (
    <div className="auth__container--page">
      <Auth
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
