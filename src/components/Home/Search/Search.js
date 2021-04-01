import React from "react";
import { Button, Form } from "react-bootstrap";

const Search = () => {
  return (
    <div className="d-flex justify-content-center">
      <Form className="p-4 w-50">
        <Form.Group controlId="formBasicEmail" className="d-flex">
          <Form.Control type="text" placeholder="Search Product" />
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export default Search;
