import React from "react";
import { Header, Main, Footer } from "containers";

export default class App extends React.Component {
  render() {
    return (
      <div className="flex flex-col items-center min-h-screen">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    );
  }
}
