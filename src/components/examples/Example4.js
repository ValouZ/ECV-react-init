import { Component } from "react";
import { Form, Button } from "react-bootstrap";

class Example4 extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
    };
  }

  handleChange(e) {
    this.setState({ userName: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    alert(`Bonjour ${this.state.userName}`);
  }

  render() {
    return (
      <div>
        <h2>Formulaire</h2>
        <Form>
          <Form.Label>Votre nom :</Form.Label>
          <Form.Control type="text" onChange={(e) => this.handleChange(e)} />
          <Button variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default Example4;
