import React, { useState, useEffect } from 'react';
import {
  Row,
  Col,
  Image,
  ListGroup,
  Button,
  Review,
  Card,
  ListGroupItem,
} from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Rating from '../components/Rating';
import products from '../products';
import axios from 'axios';

function ProductScreen({ match }) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchProduct() {
      const { data } = await axios.get('http://127.0.0.1:8000/api/products/');
      setProduct(data);
    }
    fetchProduct();
  }, []);

  return (
    <div className="align-items-center">
      <Link to="/" className="btn btn-primary my-3">
        Go Back
      </Link>
      <Row>
        <Col sm={12} md={6} lg={4} xl={3}>
          <Image src={product.image} alt={product.name} fluid></Image>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={product.numReviews + ' REVIEWS'}
                color={'#f8e825'}
              />
            </ListGroup.Item>
            <ListGroup.Item>PRICE: ${product.price}</ListGroup.Item>
            <ListGroup.Item>DESCRIPTION: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col className="my-2" md="3">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>PRICE: </Col>
                  <Col>
                    <strong>${product.price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>STATUS: </Col>
                  <Col>
                    <strong>
                      {product.countInStock > 0 ? 'Available' : 'Out of Stock'}{' '}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item className="m-1">
                <Row>
                  <Button type="button" disabled={product.countInStock == 0}>
                    Add to Cart
                  </Button>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

// function ProductScreen() {
//   return <div>Helloooo</div>;
// }

export default ProductScreen;
