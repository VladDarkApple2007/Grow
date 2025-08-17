import { useState, useEffect } from "react";
import { users } from "../constants/user";

export function useAuth() {
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  const login = (username, password) => {
    const foundUser = users.find(
      (u) => u.username === username && u.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      localStorage.setItem("user", JSON.stringify(foundUser));
      return true;
    }
    return false;
  };

  const getUsers = () => {
    const stored = localStorage.getItem("users");
    return stored ? JSON.parse(stored) : [];
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  const register = (username, password) => {
    const users = getUsers();
    if (users.find((u) => u.username === username)) {
      return false; // вже є
    }
    const newUser = { username, password };
    const updated = [...users, newUser];
    localStorage.setItem("user", JSON.stringify(newUser));
    setUser(newUser);
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    return true;
  };

  return { user, login, logout, register };
}
