"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/custom/Navbar";

interface CartItem {
  id: number;
  title: string;
  price: string;
  seller: string;
  quantity: number;
}

const CartPage: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const updateCart = (id: number, increment: boolean) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
        return { ...item, quantity: Math.max(newQuantity, 0) };
      }
      return item;
    });

    const filteredCart = updatedCart.filter((item) => item.quantity > 0); // Remove items with 0 quantity
    setCart(filteredCart);
    localStorage.setItem("cart", JSON.stringify(filteredCart));
  };

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="container mx-auto py-10 text-center">
          <h1 className="text-2xl font-bold">Your Cart is Empty</h1>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto py-10">
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
        <div className="grid grid-cols-1 gap-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b pb-4"
            >
              <div>
                <h2 className="font-bold text-lg">{item.title}</h2>
                <p className="text-sm text-gray-600">By {item.seller}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button
                    className="w-8 h-8 border rounded-lg flex items-center justify-center text-lg font-bold"
                    onClick={() => updateCart(item.id, false)}
                  >
                    -
                  </button>
                  <p>{item.quantity}</p>
                  <button
                    className="w-8 h-8 border rounded-lg flex items-center justify-center text-lg font-bold"
                    onClick={() => updateCart(item.id, true)}
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-bold mt-2">
                  ₹{parseInt(item.price.split(".")[1].trim()) * item.quantity}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CartPage;