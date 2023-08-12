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
// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Basics() {
  const [inputFocus, setInputFocus] = React.useState(false);
  const slider1 = React.useRef(null);
  const slider2 = React.useRef(null);

  return (
    <div className="section" id="sobre-mim">
      <Container>
        <h2 className="title text-white">Sobre mim</h2>
        <p className="text-white">Estou na área de TI há 10 anos profissionalmente, especificamente desenvolvendo profissionalmente integral estou há 3 anos.
        </p>
        <Row>
        <Col md="12">
                     <ul className="list-unstyled mt-2">
                    <li className="py-2">
                    Nascimento: <span class="fw-lighter">25 de Novembro de 1998</span>
                    </li>
                    <li className="py-2">
                    Idade: <span class="fw-lighter">22 anos</span>
                    </li>
                    <li className="py-2">
                    Estado: <span class="fw-lighter">São Paulo</span>
                    </li>
                    <li className="py-2">
                    Certificação mais recente: <a href="https://www.credly.com/badges/91e81db6-d3ff-4bcd-a931-9eacbfb6874e" target="_blank"
                                    class="fw-lighter text-decoration-none link-dark">AWS Cloud Practitioner</a>
                    </li>
                    <li className="py-2">
                    Trabalho: <a href="https://brhain.com.br/"
                                    target="_blank" class="fw-lighter text-decoration-none link-dark">bRHain</a>
                    </li>
                    <li className="py-2">
                    Experiência: <span class="fw-lighter"> +2
                                    anos</span>
                    </li>
                  </ul>
                    </Col>
                    </Row>
      </Container>
    </div>
  );
}
