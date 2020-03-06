import React from "react";

export default class Checkbox extends React.Component {
  render() {
    return (
      <div className="h-6 w-auto">
        <input type="checkbox" className="cursor-pointer "></input>
        <div className="inline-block">
          <span>{this.props.label}</span>
        </div>
      </div>
    );
  }
}
