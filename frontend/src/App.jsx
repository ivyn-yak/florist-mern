import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
import CreateFlower from "./pages/CreateFlower";
import DeleteFlower from "./pages/DeleteFlower";
import UpdateFlower from "./pages/UpdateFlower";
import ShowFlower from "./pages/ShowFlower";

import { CustomerReviews, Footer, Main, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";
import Nav from "./components/Nav.jsx"

const App = () => (
  <main className="relative">
  <Nav />
    <section className="xl:padding-l wide:padding-r padding-b"><Main /></section>
    <section className="padding"><PopularProducts /></section>
    <section className="padding"><SuperQuality /></section>
    <section className="padding-x py-10"><Services /></section>
    <section className="padding"><SpecialOffer /></section>
    <section className="padding bg-pink-100"> <CustomerReviews /></section>
    <section className="padding-x sm:py-32 py-16 w-full"><Subscribe /></section>
    <section className="padding-x padding-t pb-8 bg-black"><Footer /></section>
  </main>
  // <Routes>
  //   <Route path="/" element={<Home/>} />
  //   <Route path="/flowers/create" element={<CreateFlower/>} />
  //   <Route path="/flowers/delete/:id" element={<DeleteFlower/>} />
  //   <Route path="/flowers/update/:id" element={<UpdateFlower/>} />
  //   <Route path="/flowers/details/:id" element={<ShowFlower/>} />
  // </Routes>
);

export default App;
