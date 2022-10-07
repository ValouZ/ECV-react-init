import { Component } from "react";
import { Button } from "react-bootstrap";

class Example1 extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    return (
      <div>
        <h2>Compteur</h2>
        <p>{this.state.count}</p>
        <Button variant="primary" onClick={() => this.increment()}>
          Cliquer
        </Button>
      </div>
    );
  }
}

export default Example1;
