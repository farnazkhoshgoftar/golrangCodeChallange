import React from "react";

import Header from "./header";
import Footer from "./footer";

const PageHOC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
};

export default PageHOC;
