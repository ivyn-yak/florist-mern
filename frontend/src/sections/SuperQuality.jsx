import Button from "../components/Button";
import { bigFlower2 } from "../assets/images";
const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className=" font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You Super Quality Flowers
      
        </h2>
        <p className="mt-6 lg:max-w-lg info-text">
        Discover the unparalleled beauty of our exquisite flower collection, meticulously curated to embody elegance and sophistication. Each bloom is hand-selected for its unrivaled freshness, vibrant colors, and captivating fragrances, ensuring a sensory experience like no other. 
        </p>

        <p className="mt-6 lg:max-w-lg info-text">Elevate any occasion with our superlative quality flowers, a testament to nature's finest craftsmanship.</p>
        <div className="mt-10">
        <Button label="View Details" ></Button>
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
        <img 
        src={bigFlower2}
        alt="flower"
        width={570}
        height={522}
        className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
