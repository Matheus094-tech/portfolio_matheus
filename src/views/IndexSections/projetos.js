
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Projetos() {
  return (
    <div className="section" id="projetos">
      <Container>
        <Row>
          <Col md="12">
          <h2 className="title text-white">Meus projetos</h2>
          </Col>
        </Row>
      </Container>
</div>
  );
}
