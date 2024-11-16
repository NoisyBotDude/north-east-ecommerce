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

  const generateFakeStories = () => {
    const stories = [
      {
        id: 1,
        title: "Reviving Assam’s Silk Heritage",
        description:
          "The journey of Muga and Eri silk from the villages of Assam to becoming symbols of sustainable fashion.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/e/e7/Muga_silk_weaving.jpg",
        content: `
          Assam's silk heritage has been a defining symbol of sustainable craftsmanship. The Muga silk, often referred to as the 'Golden Thread,' is unique to this region. 
          The Eri silk, also called the 'Peace Silk,' is celebrated for its eco-friendly production and warm texture. From the serene villages of Sualkuchi, 
          known as the 'Manchester of Assam,' this rich heritage has adorned global fashion stages while empowering countless weavers.
        `,
      },
      {
        id: 2,
        title: "Weaving Dreams in Nagaland",
        description:
          "The intricate art of Naga handloom weaving, preserving cultural heritage through vibrant shawls and fabrics.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/6/69/Naga_Shawl.jpg",
        content: `
          Naga shawls are more than just garments; they are cultural narratives woven into vibrant fabrics. Each motif tells a story of the wearer's identity, 
          status, and heritage. This art form is not just about aesthetics but preserving a way of life, passed down through generations.
        `,
      },
      {
        id: 3,
        title: "Handcrafted Bamboo Wonders of Meghalaya",
        description:
          "Exploring the unique bamboo products of Meghalaya, from baskets to home décor, crafted by skilled artisans.",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/f9/Bamboo_basket.jpg",
        content: `
          Bamboo crafts in Meghalaya are a testament to sustainable living and skilled craftsmanship. From sturdy baskets to intricate home décor, 
          these products blend functionality with beauty. For the artisans, bamboo is not just a material but a way of life, deeply rooted in their cultural ethos.
        `,
      },
    ];
    
    localStorage.setItem("stories", JSON.stringify(stories));
  }


const SetupFakeProducts = () => {
  useEffect(() => {
    if (!localStorage.getItem("products")) {
      generateFakeProducts();
    }
    if (!localStorage.getItem("stories")) {
      generateFakeStories();
    }
  }, []);

  return null;
};

export default SetupFakeProducts;