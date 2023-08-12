/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
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
