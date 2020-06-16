import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

function Home() {
  return (
    <div className="Home">
      <Container>
        <h1>Cat Browser</h1>

        <Row>
          <Col md={3} sm={6}>
            <Form.Group controlId="formGridBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control as="select" defaultValue="Select breed">
                <option>Select breed</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
