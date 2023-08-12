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
import classnames from "classnames";
// reactstrap components
import {
  Progress,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function PaginationSection() {
  return (
    <div className="section section-pagination">
      <Container>
        <Row>
          <Col md="12">
            <h3 className="mb-4 text-white">Minhas habilidades</h3>
            <div className="mb-2 progress-container">
              <span className="progress-badge">HTML</span>
              <Progress animated value="100">
                <span className="progress-value">100%</span>
              </Progress>
            </div>
            
            <div className="mb-2 progress-container">
              <span className="progress-badge">CSS</span>
              <Progress animated max="100" value="100">
                <span className="progress-value">100%</span>
              </Progress>
            </div>
            <div className="mb-2 progress-container">
              <span className="progress-badge">Javascript</span>
              <Progress animated max="100" value="100">
                <span className="progress-value">100%</span>
              </Progress>
            </div>
            <div className="mb-2 progress-container">
              <span className="progress-badge">Java</span>
              <Progress animated max="100" value="70">
                <span className="progress-value">70%</span>
              </Progress>
            </div>
            <div className="mb-2 progress-container">
              <span className="progress-badge">AWS</span>
              <Progress animated max="100" value="100">
                <span className="progress-value">100%</span>
              </Progress>
            </div>
            <div className="mb-2 progress-container">
              <span className="progress-badge">SQL</span>
              <Progress animated max="100" value="95">
                <span className="progress-value">95%</span>
              </Progress>
            </div>
            <div className="mb-2 progress-container">
              <span className="progress-badge">Github</span>
              <Progress animated max="100" value="95">
                <span className="progress-value">95%</span>
              </Progress>
            </div>
            <br />
          </Col>
        </Row>
        <br />
      </Container>
    </div>
  );
}
