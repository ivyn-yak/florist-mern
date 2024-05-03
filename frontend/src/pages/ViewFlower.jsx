import React from "react"
import { Flower, Footer } from "../sections"
import { useParams } from "react-router-dom";

const ViewFlower = () => {
  const { id } = useParams();

  return (
    <main className="relative">
      <section className="padding">
        <Flower flowerId={id} />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  )
}

export default ViewFlower