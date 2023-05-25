import React from "react";
import Header from "parts/Header.js";
import Hero from "parts/Homepage/Hero.js";
import BrowseTheRoom from "parts/Homepage/BrowseTheRoom";
import JustArrived from "parts/Homepage/JustArrived";
import Aside from "parts/Sitemap";
import Footer from "parts/Footer";
import Clients from "parts/Homepage/Clients";
import Documents from "parts/Documents";

export default function Homepage(props) {
  return (
    <Documents>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Clients />
      <Aside />
      <Footer />
    </Documents>
  );
}
