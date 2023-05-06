import React from "react";
import Header from "parts/Header.js";
import Aside from "parts/Aside";
import Footer from "parts/Footer";
import Clients from "parts/Clients";
import Breadcrumb from "components/Breadcrumb";
import { useParams } from "react-router-dom";

export default function Details() {
  const { categoryID, productID } = useParams();
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories" + categoryID, name: "Kategori" },
          {
            url: "/categories/" + categoryID + "/products/" + productID,
            name: "Details",
          },
        ]}
      />
      <Clients />
      <Aside />
      <Footer />
    </>
  );
}
