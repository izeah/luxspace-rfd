import React from "react";
import Header from "parts/Header.js";
import Hero from "parts/HomePage/Hero.js";
import BrowseTheRoom from "parts/HomePage/BrowseTheRoom";
import JustArrived from "parts/HomePage/JustArrived";
import Aside from "parts/HomePage/Aside";
import Footer from "parts/Footer";
import Clients from "parts/HomePage/Clients";

export default function HomePage(Props) {
  return (
    <>
      <Header />
      <Hero />
      <BrowseTheRoom />
      <JustArrived />
      <Clients />
      <Aside />
      <Footer />
    </>
  );
}
