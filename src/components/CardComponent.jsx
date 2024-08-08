import React from 'react';
import { Card } from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import '../styles/Card.css';
const CardComponent = ({ title, text, svgPath }) => {
  const imageUrl = svgPath.startsWith('data:') ? svgPath : `data:image/png;base64,${svgPath}`;

  return (
    <Card style={{ width: '18rem' }} className="card-1">
      <Card.Body className="card-2">
        <div className="card-image">
        <img
              alt=""
              src={imageUrl}
              width="80"
              height="80"
              className="rounded-img d-inline-block align-top"
            />{' '}
          {/* <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="currentColor" className="bi bi-image" viewBox="0 0 16 16">
            <path d={svgPath} />
          </svg> */}
        </div>
        <Card.Title>{title}</Card.Title>
        <Card.Text><Badge bg="secondary">{text}</Badge></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
