import React from "react";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap'
import axios from "axios"; // For making client request.


class FormContact extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: "", email: "", message: ""};
  }

  handleForm = e => {
    axios.post(
      "https://formcarry.com/s/IthVsSIYcV9",
      this.state,
      {headers: {"Accept": "application/json"}}
      )
      .then(function (response) {
        console.log(response);
        window.open("/thanks", "_self")
      })
      .catch(function (error) {
        console.log(error);
      });

    e.preventDefault();
  }

  handleFields = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Form onSubmit={this.handleForm}>
        <FormGroup>
          <Label for="name">Name</Label>
          <Input required type="name" name="name" id="name" placeholder="Enter your name" onChange={this.handleFields} />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input required type="email" name="email" id="email" placeholder="Enter your email" onChange={this.handleFields} />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input required type="textarea" name="message" id="message" onChange={this.handleFields} />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}

export default FormContact;
