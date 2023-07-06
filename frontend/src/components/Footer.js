import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Footer() {
  return (
    <div>
      <footer>
        <Container>
          <Row>
            <Col className="text-center py4">Copyright &copy; AFashion</Col>
          </Row>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
