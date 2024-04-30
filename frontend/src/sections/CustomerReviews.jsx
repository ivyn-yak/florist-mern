import GetReviews from "../components/GetReviews";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold ">
        What Our
        <span> Customers </span>
        Say?
      </h3>
      <p className="mt-4 info-text m-auto max-w-lg text-center"> Hear the authentic stories of our delighted customers as they share their exceptional journeys with us.</p>
      <div className="mt-4 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14 ">
        <GetReviews />
      </div>
    </section>
  );
};

export default CustomerReviews;
