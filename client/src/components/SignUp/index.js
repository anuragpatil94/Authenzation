import React from "react";
import SignUpForm from "./SignUpForm";

export default class SignUp extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex w-1/2 lg:w-1/3">
          <div className="w-full rounded-lg">
            <SignUpForm></SignUpForm>
          </div>
        </div>
      </div>
    );
  }
}
