import { Component } from "react";

class Example2 extends Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  tick() {
    this.setState({ date: new Date() });
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>L'horloge</h2>
        <p>{this.state.date.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default Example2;
