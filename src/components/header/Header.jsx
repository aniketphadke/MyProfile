import React from 'react';
import { Container,Row , Col } from 'react-bootstrap';
import "./header.css";

const Header = () => {
  return <section className='header_section'>
    <Container>
      <Row>
        <Col lg="12">
          <h1>AP</h1>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Header