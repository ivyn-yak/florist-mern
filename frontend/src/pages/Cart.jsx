import React from "react";
import {Footer, DisplayCart} from "../sections"

const Cart = () => {
  return (
    <main className="relative">
      <section className="padding">
        <DisplayCart />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  )
}

export default Cart