import React, { useState, useContext, useEffect } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import get from "lodash/get";
import { Container, Card, Button } from "react-bootstrap";

import CatContext from "../../context/cat/catContext";

function Cat() {
  const history = useHistory();
  const match = useRouteMatch();
  const catContext = useContext(CatContext);
  const { getCat, isLoading, selectedCat } = catContext;

  const [cat, setCat] = useState({});

  useEffect(() => {
    const catId = match.params.id;
    getCat(catId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match]);

  useEffect(() => {
    const breed = get(selectedCat, "breeds[0]", {});
    const img = get(selectedCat, "url");
    const { temperament, origin, description, name } = breed;
    const details = { img, temperament, origin, description, name };
    setCat(details);
  }, [selectedCat]);

  return (
    <Container>
      {isLoading ? (
        <h1>Loading....</h1>
      ) : (
        <Card>
          <Card.Header>
            <Button variant="primary" onClick={() => history.push("/")}>
              Back
            </Button>
          </Card.Header>
          <Card.Img variant="top" src={cat.img} />
          <Card.Body>
            <h4>{cat.name}</h4>
            <h5>Origin: {cat.origin}</h5>
            <h6>{cat.temperament}</h6>
            <p>{cat.description}</p>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default Cat;
