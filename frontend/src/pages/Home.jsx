import React from "react";
import { CustomerReviews, Footer, Main, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "../sections";

const Home = () => {
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r padding-b">
        <Main />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="padding bg-pink-100">
        {" "}
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  );
};

export default Home;
