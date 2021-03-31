import React from "react";
import { Button, Form } from "react-bootstrap";

const Search = () => {
  return (
    <Form className="container">
      <Form.Group controlId="formBasicEmail" className="d-flex">
        <Form.Control type="text" placeholder="Search Product" />
        <Button variant="primary" type="submit">
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default Search;
