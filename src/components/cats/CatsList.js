import React, { useEffect, useContext } from "react";
import { Row, Col, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import CatCard from "../cats/CatCard";

import CatContext from "../../context/cat/catContext";

function CatsList() {
  const catContext = useContext(CatContext);
  const { cats, selectedBreed, isLoading, hasMore, getCatsList } = catContext;

  const history = useHistory();

  useEffect(() => {
    getCatsList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedBreed]);

  return (
    <>
      {cats.length ? (
        <Row>
          {cats.map((cat) => (
            <Col key={cat.id} md={3} sm={6}>
              <CatCard
                img={cat.url}
                onViewDetails={() => history.push(`/${cat.id}`)}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <Row>
          <Col className="empty-list">No cats available</Col>
        </Row>
      )}

      {hasMore ? (
        <Row>
          <Col>
            <Button
              disabled={!cats.length}
              variant="success"
              onClick={() => getCatsList()}
            >
              {isLoading ? "Loading..." : "Load more"}
            </Button>
          </Col>
        </Row>
      ) : null}
    </>
  );
}

export default CatsList;
