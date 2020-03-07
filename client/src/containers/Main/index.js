import React from "react";
import Login from "components/Login";

export class Main extends React.Component {
  render() {
    return (
      <main className="flex flex-grow w-1/3">
        <div className="flex flex-col justify-center items-center w-full">
          <div>{/* Different Auth Options */}</div>
          <div className="w-full md:max-w-sm rounded-lg">
            <Login></Login>
          </div>
        </div>
      </main>
    );
  }
}
