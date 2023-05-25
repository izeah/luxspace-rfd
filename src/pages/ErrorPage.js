import Documents from "parts/Documents";
import ErrorMessage from "parts/ErrorMessage";
import Footer from "parts/Footer";
import Header from "parts/Header";
import Sitemap from "parts/Sitemap";
import React from "react";

export default function ErrorPage() {
  return (
    <Documents>
      <Header />

      <ErrorMessage />

      <Sitemap />
      <Footer />
    </Documents>
  );
}
