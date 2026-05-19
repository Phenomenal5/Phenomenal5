import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const validateEmail = () => {
    const emailValidation = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailValidation.test(user.email);
  }

  const validatePassword = () => {
      const regExPassword = /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
      return regExPassword.test(user.password);
  }

  const login = () => {
    if (!validateEmail()) {
      toast.error("Invalid email format");
      return;
    }

    if (!validatePassword()) {
      toast.error("Password must be at least 8 characters long and include uppercase, lowercase letters, and numbers");
      return;
    }

    // Proceed with login logic
    localStorage.setItem("user", JSON.stringify(user));
    navigate('/dashboard') // Navigate to dashboard on successful login
  }

  return (
    <div className="rounded h-full shadow bg-gray-100 border border-gray-300 w-full flex flex-col justify-center p-6">
      <h2 className="text-2xl font-semibold my-4">Welcome Back!</h2>
      <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); login(); }}>
        <div className="flex flex-col space-y-4">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="border p-2 rounded outline-0 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div className="flex flex-col space-y-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            required
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="border p-2 rounded outline-0 focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
};

export default Login;
