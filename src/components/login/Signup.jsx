import React, { useState } from "react";
import { Link } from "react-router-dom";
import validator from "validator"; 

import { FaEye, FaEyeSlash } from "react-icons/fa"; 

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState(0);

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleNameChange = (e) => {
    const newName = e.target.value;
    setName(newName);
    if (!/^[a-zA-Z]+$/.test(newName)) {
      setNameError("Name should consist of only alphabetic characters");
    } else {
      setNameError("");
    }
  };

  const handleEmailChange = (e) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validator.isEmail(newEmail)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);

    const passwordRegex =
      /^(?=.*[A-Za-z\d])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;

    if (!passwordRegex.test(newPassword)) {
      setPasswordError(
        "Password should be 8 characters long and contain at least one alphanumeric character and one special symbol (@, $, !, %, *, ?, &)."
      );
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);

    if (newConfirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else {
      setConfirmPasswordError("");
    }
  };

  const isFormValid = () => {
    return (
      /^[a-zA-Z]+$/.test(name) &&
      validator.isEmail(email) &&
      password === confirmPassword &&
      passwordStrength >= 3
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      alert(`Name: ${name}, Email: ${email}, Password: ${password}`);
    } else {
      alert("Please fill out the form correctly.");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="h-screen flex justify-center items-center p-3 bg-[#3f2020]">
      <div className="w-full max-w-md sm:mx-8">
        <form
          onSubmit={handleFormSubmit}
          className="mb-6 bg-white rounded-lg p-8 shadow-lg"
        >
          <h1 className="text-left text-[#3f2020] text-2xl font-bold mb-4">
            Registration
          </h1>

          <div className="mb-6">
            <input
              type="text"
              name="floating_name"
              id="floating_name"
              className={`block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 ${
                nameError ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Name"
              required
              onChange={handleNameChange}
            />
            {nameError && (
              <div className="text-xs text-red-500 mt-1">{nameError}</div>
            )}
          </div>
          <div className="mb-6">
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className={`block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 ${
                emailError ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Email address"
              required
              onChange={handleEmailChange}
            />
            {emailError && (
              <div className="text-xs text-red-500 mt-1">{emailError}</div>
            )}
          </div>
          <div className="mb-6 relative">
            <input
              type={showPassword ? "text" : "password"}
              name="floating_password"
              id="floating_password"
              className={`block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 ${
                passwordError ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Password"
              required
              onChange={handlePasswordChange}
            />
            {passwordError && (
              <div className="text-xs text-red-500 mt-1">{passwordError}</div>
            )}
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={togglePasswordVisibility}
              style={{ zIndex: 1 }} 
            >
              {showPassword ? (
                <FaEyeSlash /> 
              ) : (
                <FaEye /> 
              )}
            </div>
          </div>

          <div className="mb-6 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              name="floating_confirm_password"
              id="floating_confirm_password"
              className={`block w-full py-2.5 px-0 text-sm text-gray-900 bg-transparent border-b-2 ${
                confirmPasswordError ? "border-red-500" : "border-gray-300"
              } focus:outline-none`}
              placeholder="Confirm Password"
              required
              onChange={handleConfirmPasswordChange}
            />
            {confirmPasswordError && (
              <div className="text-xs text-red-500 mt-1">
                {confirmPasswordError}
              </div>
            )}
            <div
              className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              {showConfirmPassword ? (
                <FaEyeSlash /> 
              ) : (
                <FaEye /> 
              )}
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-[#3F2020] hover-bg-[#2c1212] text-sm w-full font-bold px-5 py-2.5 text-center mt-4 rounded-3xl"
          >
            Sign Up
          </button>
          <p className="text-sm text-[#3F2020] text-center mt-4">
            Already a member?{" "}
            <Link className="text-[#3F2020] hover:underline" to="/Login">
              Login Now
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
