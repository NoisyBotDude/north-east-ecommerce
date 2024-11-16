"use client"

import Navbar from "../../components/custom/Navbar";
import Hero from "../../components/custom/Hero";
import Footer from "../../components/custom/Footer";
import GiftSection from "../../components/custom/GiftSection";
import HeroStorySection from "../../components/custom/HeroStorySection";
import ChosenForYou from "../../components/custom/ChosenForYou";
import PromoSection from "../../components/custom/PromoSection";
import WhatWeCareAbout from "@/components/custom/WhatWeCareAbout";
import GoodStories from "@/components/custom/GoodStories";
import InstagramGrid from "@/components/custom/InstagramGrid";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <GiftSection
        cards={[
          { title: "Best Sellers", imageUrl: "https://www.goodeeworld.com/cdn/shop/files/HP_BestSellers_basket_1080x.jpg?v=1729115190" },
          { title: "Gifts Under 1000", imageUrl: "https://www.goodeeworld.com/cdn/shop/files/HP_GiftsUnder75_Haws_1080x.jpg?v=1729713870" },
          { title: "New Arrivals", imageUrl: "https://www.goodeeworld.com/cdn/shop/files/HP_NewArrivals_f7d3b334-fc99-44bc-a15a-39fc3fff7d40_1080x.jpg?v=1729712806" },
        ]}
      />
      <HeroStorySection
        title="An Ode to Egypt"
        description="ANÛT Cairo takes us on a captivating cultural journey with traditionally crafted ceramics while empowering local communities."
        buttonText="Shop ANÛT Cairo"
        imageUrl="https://www.goodeeworld.com/cdn/shop/files/HP_Anut_Artisans.jpg?v=1729711729"
      />
      <ChosenForYou
        products={[
          { title: "Handloom Pure Cotton Mising Design Mekhela Sador With Blouse Material", price: "Rs. 300", imageUrl: "https://assamproducts.com/assets/product/images/lg-17268146660.jpg", rating: 5, by: "Ashish Sarmah",  id: 1 },
          { title: "Big Bamboo Oval Jewelry Box", price: "Rs. 100", imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/4/TQ/MC/BH/16024987/big-bamboo-oval-jewelry-box-500x500.jpg", rating: 5, by: "ecoBirdy", id: 2 },
          { title: "Bamboo Scenery Fan", price: "Rs. 60", imageUrl: "https://5.imimg.com/data5/SELLER/Default/2021/4/UZ/QQ/FB/16024987/bamboo-scenery-fan-500x500.jpg", rating: 5, by: "ecoBirdy", id: 3 },
        ]}
      />
      <PromoSection
        title="Make Learning Fun"
        description="The gateway to a bright childhood"
        buttonText="Shop ecoBirdy"
        imageUrls={["/path-to-chair-1.jpg", "/path-to-chair-2.jpg"]}
      />
      <WhatWeCareAbout
        items={[
          {
            icon: "https://www.goodeeworld.com/cdn/shop/files/cause_natural_material.png?v=1613683881&width=100",
            title: "Natural Materials",
            description:
              "This product has been crafted with materials that are derived from plants, animals, or other naturally occurring materials.",
          },
          {
            icon: "https://www.goodeeworld.com/cdn/shop/files/cause_environmental_conservation.png?v=1730310346&width=100",
            title: "Environmental Conservation",
            description:
              "This brand actively supports the conservation of ecosystems, biodiversity, and natural resources.",
          },
          {
            icon: "https://www.goodeeworld.com/cdn/shop/files/cause_heritage_craft_preservation.png?v=1613683881&width=100",
            title: "Heritage Craft Preservation",
            description:
              "This product supports the preservation of heritage crafts and enables artisans to create sustainable livelihoods through their traditional skills.",
          },
        ]}
      />
      <GoodStories
        stories={[
          {
            title: "Reviving Assam’s Silk Heritage",
            description:
              "The journey of Muga and Eri silk from the villages of Assam to becoming symbols of sustainable fashion.",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Assamese_Muga_With_Japi.jpg/440px-Assamese_Muga_With_Japi.jpg", // Replace with a better image if needed
            link: "/stories/1",
          },
          {
            title: "Weaving Dreams in Nagaland",
            description:
              "The intricate art of Naga handloom weaving, preserving cultural heritage through vibrant shawls and fabrics.",
            imageUrl:
              "https://upload.wikimedia.org/wikipedia/commons/6/62/Women_weaving_in_Beni_Hassan_tomb_%28%D0%92%D0%B5%D1%80%D1%82%D0%B8%D0%BA%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D1%82%D0%BA%D0%B0%D1%86%D0%BA%D0%B8%D0%B9_%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%BA_%D0%95%D0%B3%D0%B8%D0%BF%D0%B5%D1%82%29.jpg", // Replace with a better image if needed
            link: "/stories/2",
          },
          {
            title: "Handcrafted Bamboo Wonders of Meghalaya",
            description:
              "Exploring the unique bamboo products of Meghalaya, from baskets to home décor, crafted by skilled artisans.",
            imageUrl:
              "https://thegypsychiring.com/wp-content/uploads/2023/04/Mawryngkhang-Trek-Height-Mawryngkhang-Trek-Photos-The-Gypsy-Chiring.webp", // Replace with a better image if needed
            link: "/stories/3",
          },
        ]}
      />
      <InstagramGrid
        posts={[
          { imageUrl: "https://scontent.cdninstagram.com/v/t51.75761-15/467180326_18153226276336481_467324352670587146_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=jxxVbb-5busQ7kNvgF-t5hB&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=A9gzF_aU6GAMkl8C6_apOHY&oh=00_AYAdIEXY-JrivE0_trUDuHC7IxwqHmkYHUsgcQi507wEOA&oe=673E21A1", altText: "Instagram Post 1" },
          { imageUrl: "https://scontent.cdninstagram.com/v/t51.75761-15/466424517_18153020425336481_3054590238942723209_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=yN-4pmGxFpQQ7kNvgEh6IL_&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=A9gzF_aU6GAMkl8C6_apOHY&oh=00_AYCCv3j5U46wzmyHqhuuvlFsbBWbbcW4kJHiO2G3jZaSqw&oe=673E1B55", altText: "Instagram Post 2" },
          { imageUrl: "https://scontent.cdninstagram.com/v/t51.75761-15/464917495_18151514002336481_518908847424314222_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=18de74&_nc_ohc=ALJBzhY6TAMQ7kNvgHYd0ya&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=A9gzF_aU6GAMkl8C6_apOHY&oh=00_AYBtLMASHUkyyEN5qmmDe2TubXA_DmtBSzm9VBOVWQj92g&oe=673E18A3", altText: "Instagram Post 3" },
          { imageUrl: "https://scontent.cdninstagram.com/v/t51.29350-15/464747436_7938224816278247_2884154744684710155_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=ecjkOgfxX5kQ7kNvgEV2-3r&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=A9gzF_aU6GAMkl8C6_apOHY&oh=00_AYDmIZHUzV7os4aAH5N_JQjBlWhAXv44xKzIovhkvGBbZA&oe=673E1FBF", altText: "Instagram Post 4" },
          { imageUrl: "https://scontent.cdninstagram.com/v/t51.75761-15/463937675_18150677878336481_6855246905227331873_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=aTjIjSg7iDYQ7kNvgFN3fU0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=A9gzF_aU6GAMkl8C6_apOHY&oh=00_AYDFIJoPuWf8xa_1kXYoiugez7MZ4qa9Y3JUJc2JPDL5rw&oe=673E0087", altText: "Instagram Post 5" },
          { imageUrl: "https://scontent.cdninstagram.com/v/t39.30808-6/462089461_18149489632336481_5579027624360671421_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=18de74&_nc_ohc=xtQbKE9vWo8Q7kNvgExBsP2&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=A9gzF_aU6GAMkl8C6_apOHY&oh=00_AYC0RATPPdUdckAcXFyka1whDPMoIITGOWmmIZ63sDcRiw&oe=673E0D3A", altText: "Instagram Post 6" },
          { imageUrl: "https://scontent.cdninstagram.com/v/t51.29350-15/462482339_1116337573252846_5990509677043107370_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=18de74&_nc_ohc=Vr6GLbvp77AQ7kNvgF0vtb1&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=A9gzF_aU6GAMkl8C6_apOHY&oh=00_AYCVIUkGvCHlLOAaYdDBO21prsK_Y2qblfabJJXe4AkFnw&oe=673E08BC", altText: "Instagram Post 7" },
          { imageUrl: "https://scontent.cdninstagram.com/v/t39.30808-6/462366697_18149158117336481_2739193727302430209_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=18de74&_nc_ohc=3ng4lkPqfOQQ7kNvgF2BISL&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&edm=AM6HXa8EAAAA&_nc_gid=AU0Ft_ViDPwLckzryc_TwlB&oh=00_AYBt_dnoB_L4idqKVtpiOUhIJS0yGyZJ_tqzu8HblYuxgA&oe=673E228E", altText: "Instagram Post 8" },
        ]}
      />
      <Footer />
    </div>
  );
};

export default Home;