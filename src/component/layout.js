import React from "react";
import { Header, Footer } from "./";

const Layout = (props) => (
  <main className={`app-layout ${ props.className !== undefined ? props.className : ""  }`} >
    {/* HEADER */}
    <Header />

    {/* CONTAINER */}
    {props.children}

    <Footer />
  </main>
);

export default Layout;
