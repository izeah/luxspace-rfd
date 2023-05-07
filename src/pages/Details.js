import React from "react";
import Header from "parts/Header.js";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Breadcrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import { useParams } from "react-router-dom";
import Suggestions from "parts/Details/Suggestions";

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
      <ProductDetails />
      <Suggestions />
      <Sitemap />
      <Footer />
    </>
  );
}
