import React from "react";

export default class Button extends React.Component {
  render() {
    return (
      <div
        className="px-4 py-2 m-2 inline-block bg-blue-500 hover:bg-blue-400 rounded-lg text-lg text-center cursor-pointer w-1/2"
        onClick={this.props.onClick}
      >
        {this.props.children}
      </div>
    );
  }
}
