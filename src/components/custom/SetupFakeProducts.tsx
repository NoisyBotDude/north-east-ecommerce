"use client";

import { useEffect } from "react";

const generateFakeProducts = () => {
    const products = [
      {
        id: 1,
        title: "Handloom Pure Cotton Mising Design Mekhela Sador With Blouse Material",
        price: "Rs. 300",
        imageUrl: "https://assamproducts.com/assets/product/images/lg-17268146660.jpg",
        rating: 5,
        by: "Ashish Sarmah",
        material: "Pure Cotton",
        shape: "Rectangular",
        pattern: "Handloom",
        countryOfOrigin: "India",
        weight: "250 gm",
        description:
          "Perfect for traditional occasions and weddings. Handloom crafted with love and care.",
        reviews: [
          {
            name: "Ankita D.",
            rating: 5,
            date: "10/12/23",
            comment: "Beautiful product! Amazing quality.",
            helpful: 3,
            notHelpful: 0,
          },
          {
            name: "Ravi K.",
            rating: 4,
            date: "09/28/23",
            comment: "Great craftsmanship, but a bit pricey.",
            helpful: 1,
            notHelpful: 0,
          },
        ],
      },
      {
        id: 2,
        title: "Big Bamboo Oval Jewelry Box",
        price: "Rs. 100",
        imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/4/TQ/MC/BH/16024987/big-bamboo-oval-jewelry-box-500x500.jpg",
        rating: 5,
        by: "ecoBirdy",
        material: "Bamboo",
        shape: "Oval",
        pattern: "Natural Finish",
        countryOfOrigin: "India",
        weight: "150 gm",
        description:
          "A beautifully crafted jewelry box made of bamboo. Perfect for gifting or personal use.",
        reviews: [
          {
            name: "Sonia P.",
            rating: 5,
            date: "11/05/23",
            comment: "Absolutely love it! Perfect for jewelry.",
            helpful: 2,
            notHelpful: 0,
          },
        ],
      },
      {
        id: 3,
        title: "Bamboo Scenery Fan",
        price: "Rs. 60",
        imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/4/UZ/QQ/FB/16024987/bamboo-scenery-fan-500x500.jpg",
        rating: 4,
        by: "ecoBirdy",
        material: "Bamboo",
        shape: "D Shaped",
        pattern: "Printed",
        countryOfOrigin: "India",
        weight: "100 gm",
        description:
          "Perfect for summer occasions, outdoor weddings, and garden parties. Can also be used as stylish wall decorations.",
        reviews: [
          {
            name: "Rajiv T.",
            rating: 5,
            date: "10/18/23",
            comment: "Perfect for gifting. Very stylish and functional!",
            helpful: 4,
            notHelpful: 1,
          },
        ],
      },
    ];
  
    localStorage.setItem("products", JSON.stringify(products));
  };

const SetupFakeProducts = () => {
  useEffect(() => {
    if (!localStorage.getItem("products")) {
      generateFakeProducts();
    }
  }, []);

  return null;
};

export default SetupFakeProducts;