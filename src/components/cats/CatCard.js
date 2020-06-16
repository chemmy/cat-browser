import React from "react";
import { Card, Button } from "react-bootstrap";

function CatCard({ img, onViewDetails }) {
  return (
    <Card>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Button variant="primary" onClick={onViewDetails}>
          View details
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CatCard;
