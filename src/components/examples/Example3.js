import { Component } from "react";
import { Button } from "react-bootstrap";

class Example3 extends Component {
  constructor() {
    super();
    this.state = {
      isToggle: true,
    };
  }

  handleClick() {
    this.setState({ isToggle: !this.state.isToggle });
  }

  render() {
    return (
      <div>
        <h2>Toggle</h2>
        <Button variant={this.state.isToggle ? "primary" : "secondary"} onClick={() => this.handleClick()}>
          {this.state.isToggle ? "ON" : "OFF"}
        </Button>
      </div>
    );
  }
}

export default Example3;
