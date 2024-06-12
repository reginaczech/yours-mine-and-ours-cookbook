import React, { useState } from "react";
import { postRegister } from "../../APIServices/fetchServices";
import { useNavigate, Link } from "react-router-dom";
import NavBarStarter from "../NavBarStarter/NavBarStarter";

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
        //route to /my-profile
        if (data.error) {
          alert('User already exists!');
        } else {
          setRegisterForm({
            email: "",
            password: "",
            firstName: "",
            lastName: "",
          });
          navigate("/my-profile");
        }
      } catch (error) {
        console.log(`Login failed - error on client: ${error}`);
      }
    });
  };

  const validateForm = () => {
    return !email || !password || !firstName || !lastName;
  };

  const { email, password, firstName, lastName } = registerForm;

  return (
    <>
      <NavBarStarter />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-20 w-auto"
            src="https://cdn-icons-png.freepik.com/512/3839/3839426.png"
            alt="Yours, Mine and Ours Cookbooks"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-theme-dark-grey">
            Register a New Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium leading-6 text-theme-dark-grey"
              >
                First Name
              </label>
              <div className="mt-2">
                <input
                  id="firstName"
                  name="firstName"
                  type="firstName"
                  autoComplete="firstName"
                  value={firstName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium leading-6 text-theme-dark-grey"
              >
                Last Name
              </label>
              <div className="mt-2">
                <input
                  id="lastName"
                  name="lastName"
                  type="lastName"
                  autoComplete="lastName"
                  value={lastName}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 px-3 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-theme-dark-grey"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={handleChange}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-theme-dark-grey"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={handleChange}
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-theme-dark-grey shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex mt-8 w-full justify-center rounded-md bg-theme-dark-yellow px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-theme-light-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={validateForm()}
              >
                Sign in
              </button>
            </div>
          </form>

          <p
            className="mt-4
           text-center text-sm text-gray-500"
          >
            Already a member?{" "}
            <Link
              to="/login"
              className="font-semibold leading-6 text-theme-dark-yellow hover:text-theme-dark-grey"
            >
              Login Here!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;

/*
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
  ); */
