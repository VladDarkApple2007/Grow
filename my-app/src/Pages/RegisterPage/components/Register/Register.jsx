import React from "react";
import "./register.css";
import { Link } from "react-router-dom";

export default function Register({
  username,
  setUsername,
  password,
  setPassword,
  handleSubmit,
  setConfirmPassword,
  confirmPassword
}) {


  return (
    <div className="form_wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <p className="title">Register </p>
        <p className="message">Signup now and get full access to our app. </p>
        <div className="flex">
          <label>
            <input
              required
              placeholder
              type="text"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Firstname</span>
          </label>
        </div>
        <label>
          <input
            required
            placeholder
            type="password"
            className="input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span>Password</span>
        </label>
        <label>
          <input
            required
            placeholder
            type="password"
            className="input"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span>Confirm password</span>
        </label>
        <button className="submit">Submit</button>
        <Link to={"/"} className="back_btn">
          <span>Back</span>
        </Link>
        <Link to={"/auth"}>
          <p className="signin">
            Already have an acount ? <a href="#">Signin</a>{" "}
          </p>
        </Link>
      </form>
    </div>
  );
}
