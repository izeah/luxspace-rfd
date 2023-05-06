import React from "react";
import Header from "parts/Header.js";
import Hero from "parts/Hero.js";
import BrowseTheRoom from "parts/BrowseTheRoom";
import JustArrived from "parts/JustArrived";
import Aside from "parts/Aside";
import Footer from "parts/Footer";

export default function HomePage(Props) {
  return (
    <>
      <Header />
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Aside />
      <Footer />
    </>
  );
}
