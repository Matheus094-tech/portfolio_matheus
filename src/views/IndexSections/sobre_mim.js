import React, { useEffect } from "react";


// reactstrap components
import { Container, Row, Col } from "reactstrap";

export default function Sobre() {
  const newLocal = "https://brhain.com.br/";

  return (
    <div className="section" id="sobre-mim">
      <Container>
        <h2 data-aos="fade-up" className="title text-white">
          Sobre mim
        </h2>
        <p data-aos="fade-up" className="text-white">
          Estou na área de TI há 10 anos profissionalmente, especificamente
          desenvolvendo profissionalmente integral estou há 3 anos.
        </p>
        <Row>
          <Col md="12">
            <ul className="list-unstyled mt-2">
              <li data-aos="fade-up" className="py-2">
                Nascimento:
                <span class="fw-lighter">25 de Novembro de 1998</span>
              </li>
              <li data-aos="fade-up" className="py-2">
                Idade: <span class="fw-lighter">24 anos</span>
              </li>
              <li data-aos="fade-up" className="py-2">
                Estado: <span class="fw-lighter">São Paulo</span>
              </li>
              <li data-aos="fade-up" className="py-2">
                Certificação mais recente:
                <a
                  href="https://www.credly.com/badges/91e81db6-d3ff-4bcd-a931-9eacbfb6874e"
                  target="_blank"
                  class="fw-lighter text-decoration-none link-dark">
                  AWS Cloud Practitioner
                </a>
              </li>
              <li data-aos="fade-up" className="py-2">
                Trabalho:
                <a
                  href={newLocal}
                  target="_blank"
                  class="fw-lighter text-decoration-none link-dark">
                  bRHain
                </a>
              </li>
              <li data-aos="fade-up" className="py-2">
                Experiência: <span class="fw-lighter"> +2 anos</span>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
