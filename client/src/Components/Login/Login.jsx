import React, { useState } from "react";
import { postLogin } from "../../APIServices/fetchServices";
import { useNavigate, Link } from "react-router-dom";
import NavBarStarter from "../NavBarStarter/NavBarStarter";

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
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold hover:text-theme-dark-yellow text-theme-light-grey"
                  >
                    Forgot password?
                  </a>
                </div>
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
                className="flex w-full justify-center rounded-md bg-theme-dark-yellow px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-theme-light-grey focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                disabled={validateForm()}
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-theme-dark-yellow hover:text-theme-dark-grey"
            >
              Register Here!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

/* <div className="login-container">
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
      <div>Register New User</div>
    </div>*/
