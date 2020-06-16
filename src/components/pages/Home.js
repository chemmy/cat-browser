import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { useRouteMatch } from "react-router-dom";

import CatContext from "../../context/cat/catContext";
import CatsList from "../cats/CatsList";

const DEFAULT_BREED = "Select breed";

function Home() {
  const match = useRouteMatch();
  const catContext = useContext(CatContext);
  const { breeds, getBreeds, selectedBreed, setSelectedBreed } = catContext;

  const [breed, setBreed] = useState(DEFAULT_BREED);

  useEffect(() => {
    setBreed(selectedBreed || DEFAULT_BREED);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  useEffect(() => {
    getBreeds();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectBreed = (e) => {
    const breedId = e.target.value;
    setSelectedBreed(breedId);
  };

  return (
    <div className="Home">
      <Container>
        <h1>Cat Browser</h1>

        <Row>
          <Col md={3} sm={6}>
            <Form.Group controlId="formGridBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control as="select" value={breed} onChange={selectBreed}>
                <option>Select breed</option>
                {breeds.map((breed) => (
                  <option key={breed.id} value={breed.id}>
                    {breed.name}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <CatsList />
      </Container>
    </div>
  );
}

export default Home;
