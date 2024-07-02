import React, {useState} from "react";
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import {addCustomer} from "../slice/customerSlice";
import {useDispatch} from "react-redux";

export default function Adduser() {
  const dispatch = useDispatch();
  const [user, setUser] = useState("");

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    dispatch(addCustomer(user));
    setUser("");
  };

  return (
    <Container>
      <Row>
        <Col className="mt-5 d-flex justify-content-center">
          <Form style={{width: "500px"}}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Enter User Name</Form.Label>
              <Form.Control type="Text" placeholder="Jhon" value={user} onChange={handleUserChange} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleAddUser}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
