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
          <Col md="3">
            <div className="btn-wrapper profile">
            <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://www.linkedin.com/in/matheussouzabarbosa/"
                id="tooltip318450378"
                target="_blank"
              >
           <i className="fab fa-linkedin" />
              </Button>
              <Button
                className="btn-icon btn-neutral btn-round btn-simple"
                color="default"
                href="https://github.com/Matheus094-tech"
                id="tooltip318450378"
                target="_blank"
              >
          <i className="fab fa-github" />
              </Button>
             
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
