import React from "react";

export default class ClickCounter extends React.Component<
  {},
  { count: number }
> {
  readonly state = {
    count: 0
  };

  add = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  subtract = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        Count: <span id="count">{count}</span>
        <div>
          <button onClick={this.add}>Add</button>
          <button onClick={this.subtract}>Subtract</button>
        </div>
      </div>
    );
  }
}
