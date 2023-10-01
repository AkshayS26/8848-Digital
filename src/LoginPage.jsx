import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./index.css";

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.get(
        "https://assignment.8848digitalerp.com/api/method/assignment.API.access_token.get_access_token",
        {
          params: {
            usr: email,
            pwd: password,
          },
        }
      );
      console.log(response);

      const accessToken = response.data.message.data.access_token;
      console.log(accessToken);
      onLogin(accessToken);
      navigate("/users");
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div className="flex flex-col  items-center justify-center  h-screen bg-white rounded-lg shadow dark:border  xl:p-0 dark:bg-gray-800 dark:border-gray-700">
      <div className="p-6 lg:w-[25%] ">
        <h2 className="text-2xl text-white underline underline-offset-8 decoration-slate-200 text-center mb-8">
          Login Page
        </h2>
        <div>
          <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">
            Email ID:
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <label className="block mt-2 text-sm font-medium text-gray-900 dark:text-white">
            Password:
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
        </div>
      </div>
      <button
        onClick={handleLogin}
        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Login
        </span>
      </button>
    </div>
  );
};

export default LoginPage;
