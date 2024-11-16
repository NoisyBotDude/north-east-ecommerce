"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import ImageGallery from "../../../components/custom/ImageGallery";
import ProductDetails from "../../../components/custom/ProductDetails";
import ProductDescription from "../../../components/custom/ProductDescription";
import CustomerReviews from "../../../components/custom/CustomerReviews";
import Navbar from "@/components/custom/Navbar";

const ProductDetailsPage: React.FC = () => {
  const [product, setProduct] = useState<any | null>(null);
  const params = useParams();
  
  useEffect(() => {
        const { id } = params;
        const products = JSON.parse(localStorage.getItem("products") || "[]");
        const foundProduct = products.find((p: any) => p.id === Number(id));
        setProduct(foundProduct);
  }, []);

  if (!product) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <ImageGallery images={[product.imageUrl]} />

          {/* Product Details */}
          <ProductDetails
            title={product.title}
            price={product.price}
            seller={product.by}
            rating={product.rating}
            reviewsCount={product.reviews.length}
            quantity={1}
            onAddToCart={() => console.log("Added to Cart")}
          />
        </div>

        <div className="mt-10">
          {/* Product Description */}
          <ProductDescription
            description={product.description}
            features={[
              `Material: ${product.material}`,
              `Shape: ${product.shape}`,
              `Pattern: ${product.pattern}`,
              `Weight: ${product.weight}`,
              `Country of Origin: ${product.countryOfOrigin}`,
            ]}
            shippingInfo="Free returns within 30 days."
            causes={["Handmade Craft Support", "Eco-friendly Materials"]}
          />
        </div>

        <div className="mt-10">
          {/* Customer Reviews */}
          <CustomerReviews reviews={product.reviews} />
        </div>
      </div>
    </>
  );
};

export default ProductDetailsPage;