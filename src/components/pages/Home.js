import React, { useEffect, useContext } from "react";
import { Container, Row, Col, Form } from "react-bootstrap";

import CatContext from "../../context/cat/catContext";
import CatsList from "../cats/CatsList";

function Home(props) {
  const catContext = useContext(CatContext);
  const { breeds, getBreeds, selectedBreed, setSelectedBreed } = catContext;

  useEffect(() => {
    const breedId = new URLSearchParams(props.location.search).get("breed");
    setSelectedBreed(breedId || "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.location.search]);

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

        <Row className="filter">
          <Col md={3} sm={6}>
            <Form.Group controlId="formGridBreed">
              <Form.Label>Breed</Form.Label>
              <Form.Control
                as="select"
                value={selectedBreed}
                onChange={selectBreed}
              >
                <option value="">Select breed</option>
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
