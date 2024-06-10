import React, { useState } from "react";
import { postLogin } from "../../APIServices/fetchServices";
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginForm(() => ({ ...loginForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    postLogin(loginForm).then((data) => {
      try {
        setLoginForm({ email: "", password: "" });
        //route to /my-profile
        navigate("/my-profile");
      } catch (error) {
        console.log(`Login failed - error on client: ${error}`);
      }
    });
  };
  const validateForm = () => {
    return !email || !password;
  };

  const { email, password } = loginForm;

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <button type="submit" className="form-submit" disabled={validateForm()}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
