import { Component } from "react";
import { InputGroup, Button, Form } from 'react-bootstrap';
import {Nav} from './Header.styled'
export class Header extends Component{
  render() {
    return (
      <Nav>
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
      </Nav>
    )
  }
}