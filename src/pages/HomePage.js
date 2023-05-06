import React from "react";
import Header from "parts/Header.js";
import Hero from "parts/HomePage/Hero.js";
import BrowseTheRoom from "parts/HomePage/BrowseTheRoom";
import JustArrived from "parts/HomePage/JustArrived";
import Aside from "parts/Aside";
import Footer from "parts/Footer";
import Clients from "parts/Clients";

export default function Homepage(props) {
  return (
    <>
      <Header theme="white" position="absolute" />
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Clients />
      <Aside />
      <Footer />
    </>
  );
}
