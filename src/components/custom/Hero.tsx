import { FC } from "react";

const Hero: FC = () => {
    return (
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">The Holiday Shop is Now Open</h1>
          <p className="text-lg text-gray-600 mb-6">
            Discover thoughtful gifts, crafted to inspire joy.
          </p>
          <button className="bg-black text-white py-2 px-4 rounded">
            Shop Gifts
          </button>
        </div>
      </section>
    );
  };
  
  export default Hero;