/* import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
// reactstrap components
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardText,
  CardDeck,
  CardSubtitle,
  CardBody,
} from "reactstrap";

export default function Projetos() {
  useEffect(() => {
    AOS.init();
  }, []);

  const botao = {
    fontSize: "50px",
  };

  return (
    <div className="section" id="projetos">
      <Container>
        <h2 data-aos="fade-down" className="title text-white">
          Meus projetos
        </h2>
        <Row>
          <CardDeck className="container">
            <Card>
            <CardImg
                top
                width="100%"
                src={require("assets/img/edq.jpg")}
                alt="EDQ"
              />
              <CardBody>
                <CardTitle>EDQ - Eduquidade</CardTitle>
                <CardText>
                  Plataforma do tipo rede social, com gestão de usuários e
                  publicações em feed, conectando backend e frontend, feita com
                  Java, Spring Boot e Angular.
                </CardText>
                <div className="text-center" style={botao}>
                  <a
                    href="https://github.com/Matheus094-tech"
                    id="tooltip318450378"
                    target="_blank">
                    <i className="fab fa-github text-white" />
                  </a>
                  <a
                    href="https://netflixclonematheus.netlify.app/"
                    id="tooltip318450378"
                    target="_blank">
                    <i className="las la-battery-three-quarters"></i>
                  </a>
                </div>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src="https://placeholdit.imgix.net/~text?txtsize=33&txt=256%C3%97180&w=256&h=180"
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>Card subtitle</CardSubtitle>
                <CardText>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </CardText>
                <Button>Button</Button>
              </CardBody>
            </Card>
            <Card>
              <CardImg
                top
                width="100%"
                src={require("assets/img/netflix.png")}
                alt="Netflix"
              />
              <CardBody>
                <CardTitle>Clone Netflix</CardTitle>
                <CardText>
                  Aplicação inspirada no layout da Netlfix, realizada em React e
                  se conectando via API com o Themoviedb.org para trazer os
                  resultados do catálogo.
                </CardText>

                <div className="text-center" style={botao}>
                  <a
                    href="https://github.com/Matheus094-tech"
                    id="tooltip318450378"
                    target="_blank">
                    <i className="fab fa-github text-white" />
                  </a>
                  <a
                    href="https://netflixclonematheus.netlify.app/"
                    id="tooltip318450378"
                    target="_blank">
                    <i className="las la-battery-three-quarters"></i>
                  </a>
                </div>
              </CardBody>
            </Card>
          </CardDeck>
        </Row>
      </Container>
    </div>
  );
}
*/

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
import "./projetos.css";
// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";

export default function Examples() {
  return (
    <div className="section">
      <Container className="text-center">
        <h2 data-aos="fade-down" className="title text-white">
          Meus projetos
        </h2>
        <Row>
          <Col data-aos="fade-down" md="4 marginCard">
            <div data-aos="fade-down" className="wrapperTest">
              <div className="single-card">
                <div className="front">
                  <img
                    className="img-raised"
                    src={require("assets/img/edq.jpg")}
                  />
                </div>
                <div className="back">
                  <img
                    className="img-raised"
                    src={require("assets/img/edq.jpg")}
                  />
                  <div className="content">
                    <h2>EDQ - Plataforma Educacional</h2>
                    <p>
                      Projeto fullstack criado com MySQL, Spring e Angular,
                      plataforma do tipo rede social, com autenticação de
                      acessos, gerenciamentos de perfis e publicações.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <a
                href="https://github.com/Matheus094-tech/EDQ-Angular"
                target="_blank"
                class="iconeBotao">
                <i class="lab la-github"></i>
              </a>
              <a
                href="https://edq-ensino.netlify.app/#/homepage"
                target="_blank"
                class="iconeBotao">
                <i class="las la-external-link-alt"></i>
              </a>
            </div>
          </Col>
          <Col data-aos="fade-down" md="4 marginCard">
            <div data-aos="fade-down" className="wrapperTest">
              <div className="single-card">
                <div className="front">
                  <img
                    className="img-raised"
                    src={require("assets/img/netflix.png")}
                  />
                </div>
                <div className="back">
                  <img
                    className="img-raised"
                    src={require("assets/img/netflix.png")}
                  />
                  <div className="content">
                    <h2>Clone Netflix</h2>
                    <p>
                      Aplicação inspirada no layout da Netlfix, realizada em
                      React e se conectando via API com o Themoviedb.org para
                      trazer os resultados do catálogo.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-center">
              <a
                href="https://github.com/Matheus094-tech/Netflix"
                target="_blank"
                class="iconeBotao">
                <i class="lab la-github"></i>
              </a>
              <a
                href="https://netflixclonematheus.netlify.app/"
                target="_blank"
                class="iconeBotao">
                <i class="las la-external-link-alt"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
