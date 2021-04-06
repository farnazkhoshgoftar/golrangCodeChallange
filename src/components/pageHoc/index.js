import React from "react";

import Header from "./header";
import Footer from "./footer";
import './pageHoc.css'

const PageHOC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default PageHOC;
