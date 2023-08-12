import React from "react";
// reactstrap components
import { Container } from "reactstrap";

export default function Navbars() {
  return (
    <div className="section section-navbars">
      <img alt="..." className="path" src={require("assets/img/path3.png")} />
      <Container id="menu-dropdown"></Container>
    </div>
  );
}
