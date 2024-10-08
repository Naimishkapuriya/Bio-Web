import React from "react";
import PageHeader from "./PageHeader";

const Layout = ({ children }) => {
  return (
    <>
      <PageHeader />
      <main className="main_padding">{children}</main>
    </>
  );
};

export default Layout;
