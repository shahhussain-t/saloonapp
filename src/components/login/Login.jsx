import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberPasswordChange = (e) => {
    setRememberPassword(e.target.checked);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert(
      `Email: ${email}, Password: ${password}, Remember Password: ${rememberPassword}`
    );
  };

  return (
    <div className="h-screen flex justify-center items-center p-3 bg-[#3f2020]">
      <div className="w-full max-w-md sm:mx-8">
        <form
          onSubmit={handleFormSubmit}
          className="mb-6 bg-white rounded-lg p-8 shadow-lg"
        >
          <h1 className="text-left text-[#3f2020] text-2xl font-bold mb-4">
            {" "}
            <span className="underline ">Lo</span>gin
          </h1>
          <div className="mb-6">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020]"
              placeholder="Email address"
              required
              onChange={handleEmailChange}
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              name="floating_password"
              id="floating_password"
              className="block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 border-gray-300 focus:outline-none focus:border-[#3f2020]"
              placeholder="Password"
              required
              onChange={handlePasswordChange}
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberPassword"
                className="mr-2 text-[#3f2020]"
                checked={rememberPassword}
                onChange={handleRememberPasswordChange}
              />
              <label
                htmlFor="rememberPassword"
                className="text-sm text-gray-900"
              >
                Remember Password
              </label>
            </div>
            <a href="#" className="text-sm text-[#3f2020] hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="text-white bg-[#3F2020] hover:bg-[#2c1212] text-sm w-full font-bold px-5 py-2.5 text-center mt-4 rounded-3xl"
          >
            Log in
          </button>
          <p className="text-sm text-[#3F2020] text-center mt-4">
            Not a member?{" "}
            <Link className="text-[#3F2020] hover:underline" to="/Signup">
              Signup Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
