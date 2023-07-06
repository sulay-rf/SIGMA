import React, { useEffect, useState } from 'react';
import { Row, Col } from 'react-bootstrap';
// import products from '../products';
import Product from '../components/Product';
import axios from 'axios';

function HomeScreen() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchProducts() {
      const { data } = await axios.get('http://localhost:8000/api/products/');
      setProducts(data);
    }
    fetchProducts( );
  }, []);

  return (
    <div>
      <h1 className="py-3">Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.p_id} sm={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;