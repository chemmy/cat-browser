import React, { useState, useContext, useEffect } from "react";
import { useRouteMatch, Link } from "react-router-dom";
import get from "lodash/get";
import { Container, Card } from "react-bootstrap";

import CatContext from "../../context/cat/catContext";

function Cat() {
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
    const { temperament, origin, description, name, id } = breed;
    const details = { img, temperament, origin, description, name, id };
    setCat(details);
  }, [selectedCat]);

  return (
    <Container className="Cat">
      {isLoading ? (
        <h5>Loading....</h5>
      ) : (
        <Card>
          <Card.Header>
            <Link className="btn btn-primary" to={`/?breed=${cat.id}`}>
              Back
            </Link>
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
