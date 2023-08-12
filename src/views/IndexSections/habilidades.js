import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// reactstrap components
import { Progress, Container, Row, Col } from "reactstrap";

export default function Habilidades() {
  useEffect(() => {
    AOS.init();
  }, []);

  const verBadge = (event) => {
    window.open(
      "https://www.credly.com/badges/91e81db6-d3ff-4bcd-a931-9eacbfb6874e"
    );
  };

  return (
    <div className="section" id="habilidades">
      <Container>
        <h2 data-aos="fade-up" className="title text-white">
          Minhas habilidades
        </h2>
        <Row>
          <Col md="12">
            <div data-aos="fade-up-right" className="mt-2 progress-container">
              <span className="progress-badge">HTML</span>
              <Progress animated value="100">
                <span className="progress-value">100%</span>
              </Progress>
            </div>
            <div data-aos="fade-up-right" className="mt-2 progress-container">
              <span className="progress-badge">CSS</span>
              <Progress animated max="100" value="100">
                <span className="progress-value">100%</span>
              </Progress>
            </div>
            <div data-aos="fade-up-right" className="mt-2 progress-container">
              <span className="progress-badge">Javascript</span>
              <Progress animated max="100" value="100">
                <span className="progress-value">100%</span>
              </Progress>
            </div>
            <div data-aos="fade-up-right" className="mt-2 progress-container">
              <span className="progress-badge">Java</span>
              <Progress animated max="100" value="70">
                <span className="progress-value">70%</span>
              </Progress>
            </div>
            <div data-aos="fade-up-right" className="mt-2 progress-container">
              <span className="progress-badge">AWS</span>
              <Progress animated max="100" value="100">
                <span className="progress-value">100%</span>
              </Progress>
            </div>
            <div data-aos="fade-up-right" className="mt-2 progress-container">
              <span className="progress-badge">SQL</span>
              <Progress animated max="100" value="95">
                <span className="progress-value">95%</span>
              </Progress>
            </div>
            <div data-aos="fade-up-right" className="mt-2 progress-container">
              <span className="progress-badge">Github</span>
              <Progress animated max="100" value="95">
                <span className="progress-value">95%</span>
              </Progress>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-5" md="12">
            <img
              data-aos="flip-up"
              width="150px;"
              height="150px"
              data-aos-duration="1500"
              className="badge_habilidades"
              onClick={(event) => verBadge(event)}
              src={require("assets/img/badge_aws.png")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
