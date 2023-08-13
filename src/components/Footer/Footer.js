import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md="12">
            <div class="d-flex justify-content-center">
              <a
                href="https://www.linkedin.com/in/matheussouzabarbosa/"
                target="_blank"
                class="iconeFooter">
                <i className="fab fa-linkedin" />
              </a>
              <a
                href="https://github.com/Matheus094-tech"
                target="_blank"
                class="iconeFooter">
                <i className="fab fa-github" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
