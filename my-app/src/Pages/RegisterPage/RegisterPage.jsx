import { useState } from "react";
import Register from "./components/Register/Register";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterPage() {
  const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const hasDigits = /\d/.test(username); // Перевіряє, чи є хоч одна цифра

    if (hasDigits) {
      toast.error("Username should not contain numbers.");
      return;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords do not match.");
      return; // Зупиняє подальше виконання
    }
    const ok = register(username, password);
    if (ok) navigate("/");
    else toast.info("A user with that name already exists.");
  };
  return (
    <div>
      <Register
        username={username}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
      />
    </div>
  );
}
