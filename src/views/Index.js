import React from "react";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import PageHeader from "components/PageHeader/PageHeader.js";
import Footer from "components/Footer/Footer.js";

// sections for this page/view
import Basics from "views/IndexSections/sobre_mim";
import Navbars from "views/IndexSections/Navbars.js";
import Pagination from "views/IndexSections/habilidades.js";
import Projects from "views/IndexSections/projetos.js"

export default function Index() {
  React.useEffect(() => {
    document.body.classList.toggle("index-page");
    // Specify how to clean up after this effect:
    return function cleanup() {
      document.body.classList.toggle("index-page");
    };
  }, []);
  return (
    <>
      <IndexNavbar />
      <div className="wrapper">
        <PageHeader />
        <div className="main">
          <Basics />
          <Navbars />
          <Pagination />
          <Projects />
        </div>
        <Footer />
      </div>
    </>
  );
}
