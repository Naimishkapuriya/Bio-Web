import React from "react";
import PageHeader from "./PageHeader";
import Aos from "./Aos";

const Layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      <main className="main_padding">{children}</main>
      <Aos />
    </>
  );
};

export default Layout;
