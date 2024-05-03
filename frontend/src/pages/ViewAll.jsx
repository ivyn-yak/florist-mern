import React from 'react'
import { Footer, DisplayProducts } from "../sections";


const ViewAll = () => {
  return (
    <main className="relative">
      <section className="padding">
        <DisplayProducts />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  )
}

export default ViewAll