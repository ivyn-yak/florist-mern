import React from "react"

const ViewFlower = () => {
  return (
    <main className="relative">
      <section className="xl:padding-l wide:padding-r padding-b">
        <Main />
      </section>
      <section className="padding-l ">
        <PopularProducts />
      </section>
      <section className="padding-x padding-t pb-8 bg-black">
        <Footer />
      </section>
    </main>
  )
}

export default ViewFlower