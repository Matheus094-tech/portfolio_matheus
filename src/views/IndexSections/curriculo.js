import React, { useEffect } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./curriculo.css";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  Label,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";

export default function Curriculo() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="section cv" id="curriculo">
      <Container>
        <h2 data-aos="fade-up" className="title text-white">
          Curriculo
        </h2>
        <Row>
          <Col md="6">
            <h3 class="text-white mt-3" data-aos="fade-up">
              Educação
            </h3>
            <div class="cv-item" data-aos="fade-up">
            <img alt="..." className="path" src={require("assets/img/path1.png")} />
              <h4>Análise e Desenvolvimento de Sistemas</h4>
              <h5>2022-2024</h5>
              <p>
                <em>Universidade Anhembi Morumbi</em>
              </p>
              <p>
                Curso ministrado em uma das melhores faculdades do país. Análise
                e desenvolvimento de sistemas é uma área responsável por
                analisar, desenvolver, analisar, projetar, implementar e
                atualizar sistemas de informação. Os profissionais da área geram
                softwares, que são executados em hardwares e operados por
                usuários diversos.
              </p>
            </div>
            <div class="cv-item" data-aos="fade-up">
              <h4>Desenvolvedor Web Java JR Full Stack</h4>
              <h5>2021</h5>
              <p>
                <em>Generation Brasil</em>
              </p>
              <p>
                Curso ministrado em uma das maiores ONG's do mundo no quesito,
                ensinado desde habilidades técnicas até mesmo comportamentais.
              </p>
            </div>
            <div class="cv-item" data-aos="fade-up">
            <img alt="..." className="path" src={require("assets/img/path2.png")} />
              <h4>Engenharia Civil</h4>
              <h5>2017-2022</h5>
              <p>
                <em>UNIP</em>
              </p>
              <p>
                Bolsista Prouni no curso de bacharel em Engenharia Civil.O curso
                de Engenharia Civil tem o objetivo de formar profissionais
                capazes de coordenar todas as fases de uma obra, desde o seu
                planejamento até a etapa de acabamentos finais, passando pelo
                controle dos custos, segurança, materiais utilizados e
                gerenciamento das equipes de trabalho.
              </p>
            </div>
            <div class="cv-item" data-aos="fade-up">
              <h4>Técnico em Mecâtronica</h4>
              <h5>2015-2016</h5>
              <p>
                <em>ENIAC</em>
              </p>
              <p>
                O técnico em Mecatrônica é um profissional de nível médio que
                utiliza conhecimentos de áreas como Elétrica, Mecânica e
                Informática para instalar, operar e fazer a manutenção de
                máquinas, equipamentos e sistemas informatizados.
              </p>
            </div>
          </Col>

          <Col md="6">
            <h3 class="text-white mt-3" data-aos="fade-up">
              Profissional
            </h3>
            <div class="cv-item" data-aos="fade-up">
            <img alt="..." className="path" src={require("assets/img/path3.png")} />
              <h4>Analista de Sistemas Júnior</h4>

              <h5>Fevereiro/2022 - Atualmente</h5>
              <p>
                <em>bRHain</em>
              </p>
              <p>
                A bRHain foi criada para simplificar a rotina de trabalho das
                equipes de RH e oferecer inteligência de dados que melhore as
                tomadas de decisão realizadas pela área
              </p>
              <p>
                Responsável pelo desenvolvimento geral da plataforma, desde a
                visão do colaborador até as rotinas utilizadas pelo DP/RH na
                gestão
              </p>
            </div>
            <div class="cv-item" data-aos="fade-up">
              <h4>Analista de Sistemas Júnior</h4>
              <h5>Agosto/2021 - Fevereiro/2022</h5>
              <p>
                <em>Plusoft</em>
              </p>
              <p>
                A Plusoft é uma das maiores empresas de human experience (HX).
                Somos especialistas na fabricação, desenvolvimento e na
                implementação de softwares Omnichannel de Customer Relationship
                Management (CRM) para todos os mercados.
              </p>
            </div>
            <div class="cv-item" data-aos="fade-up">
              <h4>Gerente de tecnologia</h4>
              <h5>Março/2020 - Agosto/2021</h5>
              <p>
                <em>Stark Tecnologia</em>
              </p>
              <p>
                Responsável pela negociação com cliente pessoa física ou
                jurídica, atuando também no desenvolvimento de sites e controle
                de TI de empresas, tendo serviços periódico para empresas e
                cliente final como também responsável por contratos de prestação
                de serviços a empresas. Deixou a empresa que fundou para
                ingressar 100% na área de desenvolvimento.
              </p>
            </div>

            <div class="cv-item" data-aos="fade-up">
            <img alt="..." className="path" src={require("assets/img/path4.png")} />
              <h4>Gerente técnico de TI</h4>
              <h5>Agosto/2016 - Fevereiro/2020</h5>
              <p>
                <em>Megga Computadores</em>
              </p>
              <p>
                Iniciei como responsável pela manutenção de computadores e
                notebooks. Passando por todos os setores da empresa e encerrando
                como gerente da empresa que fechou devido a pandemia. Era o
                único responsável de campo para ir as empresas e realizar os
                serviços in loco, em um projeto de app com PHP e SQL e foi onde
                a paixão pelo desenvolvimento se iniciou.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
