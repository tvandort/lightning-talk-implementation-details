import React from "react";
import Button from "./components/Button";

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
      <div className="Counter">
        <div>
          <label htmlFor="count">
            Count: <span id="count">{count}</span>
          </label>
        </div>
        <div className="Buttons">
          <Button onClick={this.add}>Add</Button>
          <Button onClick={this.subtract}>Sub</Button>
        </div>
      </div>
    );
  }
}
