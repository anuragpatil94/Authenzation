import React from "react";

export default class TextField extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <input
          className="bg-gray-300 m-2 px-4 py-2 rounded-lg"
          placeholder={this.props.label}
          type={this.props.type | "text"}
        ></input>
      </div>
    );
  }
}
