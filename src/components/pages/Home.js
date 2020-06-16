import React, { useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import CatContext from "../../context/cat/catContext";

function Home() {
  const catContext = useContext(CatContext);
  const { breeds, getBreeds } = catContext;

  useEffect(() => {
    getBreeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                {breeds.map((breed) => (
                  <option key={breed.id}>{breed.name}</option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
