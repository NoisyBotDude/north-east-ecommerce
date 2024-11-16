import { useState, useEffect } from "react";

interface ProductDetailsProps {
  id: number; // Unique ID for the product
  title: string;
  price: string;
  seller: string;
  rating: number;
  reviewsCount: number;
  quantity: number;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  id,
  title,
  price,
  seller,
  rating,
  reviewsCount,
  quantity,
}) => {
  const [cartQuantity, setCartQuantity] = useState<number>(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProduct = cart.find((item: any) => item.id === id);
    if (existingProduct) {
      setCartQuantity(existingProduct.quantity);
    }
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");

    const product = {
      id,
      title,
      price,
      seller,
      quantity: 1, // Initial quantity is set to 1
    };

    const existingProductIndex = cart.findIndex((item: any) => item.id === id);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    setCartQuantity(cartQuantity + 1);
  };

  const increaseQuantity = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex((item: any) => item.id === id);

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartQuantity(cart[existingProductIndex].quantity);
    }
  };

  const decreaseQuantity = () => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existingProductIndex = cart.findIndex((item: any) => item.id === id);

    if (existingProductIndex !== -1 && cart[existingProductIndex].quantity > 1) {
      cart[existingProductIndex].quantity -= 1;
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartQuantity(cart[existingProductIndex].quantity);
    } else if (existingProductIndex !== -1 && cart[existingProductIndex].quantity === 1) {
      cart.splice(existingProductIndex, 1); // Remove product from cart if quantity is 1
      localStorage.setItem("cart", JSON.stringify(cart));
      setCartQuantity(0);
    }
  };

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p className="text-xl font-semibold text-gray-800">{price}</p>
      <p className="text-sm text-gray-600">
        By <a href="#" className="text-blue-600 hover:underline">{seller}</a>
      </p>
      <div className="flex items-center space-x-1">
        <p className="text-yellow-500">{'★'.repeat(Math.round(rating))}</p>
        <p className="text-gray-600">({reviewsCount} Reviews)</p>
      </div>
      {cartQuantity > 0 ? (
        <div className="flex items-center space-x-4">
          <button
            className="w-10 h-10 border rounded-lg"
            onClick={decreaseQuantity}
          >
            -
          </button>
          <p>{cartQuantity} in cart</p>
          <button
            className="w-10 h-10 border rounded-lg"
            onClick={increaseQuantity}
          >
            +
          </button>
        </div>
      ) : (
        <button
          className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700"
          onClick={addToCart}
        >
          Add to Cart
        </button>
      )}
    </div>
  );
};

export default ProductDetails;