import React, { useEffect } from "react";
import Header from "parts/Header.js";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import Breadcrumb from "components/Breadcrumb";
import ProductDetails from "parts/Details/ProductDetails";
import { useParams } from "react-router-dom";
import Suggestions from "parts/Details/Suggestions";
import useAsync from "helpers/hooks/useAsync";
import fetchData from "helpers/fetchData";

export default function Details() {
  const { categoryID, productID } = useParams();
  const { data, isLoading, run } = useAsync();

  useEffect(() => {
    run(fetchData({ url: `/api/v1/products/${productID}` }));
  }, [run, productID]);

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
      {isLoading ? "Loading" : <ProductDetails data={data} />}
      {isLoading ? (
        "Loading"
      ) : (
        <Suggestions data={data?.relatedProducts || []} />
      )}
      <Sitemap />
      <Footer />
    </>
  );
}
