import React from "react";
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component {
  render() {
    return (
      <form className="bg-white shadow-md rounded px-8 py-6 ">
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Username
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="Username"
          ></input>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-lg font-bold mb-2">
            Password
          </label>
          <input
            type="password"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            placeholder="***********"
          ></input>
          {/* <p>Please choose a password</p> */}
        </div>
        <div className="mb-4">
          <label>
            <input type="checkbox"></input>
            <span className="text-gray-700 pl-2">Remember me</span>
          </label>
        </div>
        <div className="mb-4 flex items-center justify-between">
          <button
            className="bg-blue-500 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none shadow-md focus:shadow-outline mr-2"
            type="button"
          >
            Sign In
          </button>
          <Link
            className="block w-1/2 ml-2 text-center align-baseline font-bold text-md leading-10 border-2 border-blue-500 shadow-md rounded hover:border-blue-800 text-blue-500 hover:text-blue-800"
            to="/signup"
          >
            <span>Sign Up</span>
          </Link>
        </div>
        <div className="text-center">
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="/"
          >
            Forgot Password?
          </a>
        </div>
      </form>
    );
  }
}
