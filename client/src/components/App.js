import React from "react";
import Login from "./Login";

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="flex flex-col items-center min-h-screen">
          <header className="text-center bg-gray-800 text-gray-300 px-6 py-4 shadow-md w-full">
            Navigation Bar
            {/* TODO: Add a button here for dark/light theme */}
            <div className="float-right">
              <label className="switch">
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </header>
          <main className="flex flex-grow w-1/3">
            <div className="flex flex-col justify-center items-center w-full">
              <div className="bg-gray-400 w-32 h-32 mb-4 text-center text-gray-700">
                Logo
              </div>
              <div>{/* Different Auth Options */}</div>
              <div className="w-full md:max-w-md rounded-lg">
                <Login></Login>
              </div>
            </div>
          </main>
          <footer className="text-center bg-gray-800 text-gray-300 px-6 py-4 shadow-md w-full">
            Footer
          </footer>
        </div>
      </>
    );
  }
}
