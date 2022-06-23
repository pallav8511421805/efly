import React from 'react';
import {Button,Input,Form,Label,FormGroup} from 'reactstrap';

function Form(props) {
    return (
        <Form>
  <FormGroup>
    <Label for="exampleEmail">
      Email
    </Label>
    <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
    />
  </FormGroup>
  <FormGroup>
    <Label for="examplePassword">
      Password
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
    />
  </FormGroup>
  <Button>
    Submit
  </Button>
</Form>
    );
}

export default Form;