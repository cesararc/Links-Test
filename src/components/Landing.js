import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import ListUser from "./List/ListUser";

class Landing extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md="auto">
            <Link to="/login" className="btn btn-outline-primary">
              Iniciar Sesión
            </Link>
          </Col>
        </Row>
        <ListUser />
      </Container>
    );
  }
}

export default Landing;
