import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import Rating from './Rating';
import { Link } from 'react-router-dom';

function Product({ product }) {
  return (
    <Card className="my-3 p-2 rounded">
      <Link to={`/product/${product.p_id}`}>
        <Card.Img src={product.image}></Card.Img>
      </Link>
      <Card.Body>
        <Link to={`/product/${product.p_id}`} state={{ title: 'id' }}>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <div className="my-2">
            {product.rating} from {product.name}
            <Row>
              <Col>
                <Rating
                  value={product.rating}
                  text={product.numReviews + ' ratings'}
                  color={'#f8e825'}
                ></Rating>
              </Col>
            </Row>
          </div>
        </Card.Text>
        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product;
