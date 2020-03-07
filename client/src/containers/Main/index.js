import React from "react";
import Login from "components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "components/SignUp";

export class Main extends React.Component {
  render() {
    return (
      <main className="flex flex-grow w-full">
        <Router>
          <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
          </Switch>
        </Router>
      </main>
    );
  }
}
