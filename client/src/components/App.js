import React from "react";
import Login from "./Login";

export default class App extends React.Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <Login></Login>
      </div>
    );
  }
}
