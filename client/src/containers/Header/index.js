import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header className="text-center bg-gray-800 text-gray-300 px-6 py-4 shadow-md w-full">
        {/* TODO: Add a button here for dark/light theme */}
        <div className="float-right">
          <span className="border rounded-full border-grey flex items-center cursor-pointer w-12 justify-start">
            <span className="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
          </span>
          {/* <span class="border rounded-full border-grey flex items-center cursor-pointer w-12 bg-green justify-end">
            <span class="rounded-full border w-6 h-6 border-grey shadow-inner bg-white shadow"></span>
          </span> */}
        </div>
      </header>
    );
  }
}
