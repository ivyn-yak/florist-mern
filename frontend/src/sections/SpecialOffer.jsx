import { Flower4 } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={Flower4}
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>

      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          Special Offer
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
          Experience the joy of savings with our exclusive special offer on
          flowers! Treat yourself or surprise a loved one with stunning blooms
          at unbeatable prices. From vibrant roses to delicate lilies, our
          curated selection of discounted flowers is sure to brighten any day.
        </p>

        <p className="mt-6 lg:max-w-lg info-text">
          Don't miss out on this limited-time opportunity to add a touch of
          beauty to your life without breaking the bank. Shop now and indulge in
          the luxury of affordable elegance!
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop Now" iconURL={arrowRight} />
          <Button label="Learn More" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray" />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
