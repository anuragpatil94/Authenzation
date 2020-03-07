import React, { Component } from "react";

export default class SignUpForm extends Component {
  render() {
    return (
      <form className="bg-white shadow-md rounded px-8 py-6 ">
        <div className="mb-4 flex flex-wrap">
          <div className="w-full mb-4 md:mb-0 md:w-1/2 md:pr-2">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              placeholder="First Name"
            ></input>
          </div>
          <div className="w-full md:w-1/2 md:pl-2">
            <label className="block text-gray-700 text-lg font-bold mb-2">
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Last Name"
            ></input>
          </div>
        </div>

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
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 w-full md:w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}
