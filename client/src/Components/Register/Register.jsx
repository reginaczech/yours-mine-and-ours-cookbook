import React, { useState } from "react";
import { postRegister } from "../../APIServices/fetchServices";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [registerForm, setRegisterForm] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterForm(() => ({ ...registerForm, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    postRegister(registerForm).then((data) => {
      try {
        console.log("post", data)
        setRegisterForm({
          email: "",
          password: "",
          firstName: "",
          lastName: "",
        });
        //route to /my-profile
        navigate("/my-profile");
      } catch (error) {
        alert(error);
        console.log(`Login failed - error on client: ${error}`);
      }
    });
  };

  const validateForm = () => {
    return !email || !password || !firstName || !lastName;
  };

  const { email, password, firstName, lastName } = registerForm;

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={handleChange}
        />
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
