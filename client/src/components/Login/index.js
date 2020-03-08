import React from "react";
import LoginForm from "./LoginForm";

class Login extends React.Component {
  render() {
    return (
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex w-1/3">
          <div className="flex w-full">
            <div>{/* Different Auth Options */}</div>
            <div className="w-full rounded-lg">
              <LoginForm></LoginForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
