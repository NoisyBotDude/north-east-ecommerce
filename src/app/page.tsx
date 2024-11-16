"use client"

import Navbar from "../components/custom/Navbar";
import Hero from "../components/custom/Hero";
import Footer from "../components/custom/Footer";
import GiftSection from "../components/custom/GiftSection";
import HeroStorySection from "../components/custom/HeroStorySection";
import ChosenForYou from "../components/custom/ChosenForYou";
import PromoSection from "../components/custom/PromoSection";
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
          { title: "Gifts Under 75 USD", imageUrl: "https://www.goodeeworld.com/cdn/shop/files/HP_GiftsUnder75_Haws_1080x.jpg?v=1729713870" },
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
          { title: "Shakerbraid Multicolor", price: "$80.00", imageUrl: "https://cdn.shopify.com/s/files/1/0071/1684/9252/products/Goodee-Berea-College-Shakerbraid-Multicolor_400x400.jpg?v=1632945092", rating: 5, by: "Berea College" },
          { title: "Pebble Lighter", price: "$140.00", imageUrl: "https://cdn.shopify.com/s/files/1/0071/1684/9252/files/PEBBLE-JADE_28518_400x400.jpg?v=1727273468", rating: 3, by: "Maison Ko" },
          { title: "Charlie Chair", price: "$225.00", imageUrl: "https://cdn.shopify.com/s/files/1/0071/1684/9252/products/EC_CHA050_5537_400x400.jpg?v=1678382860", rating: 5, by: "ecoBirdy" },
          { title: "All Bright Set", price: "$750.00", imageUrl: "https://cdn.shopify.com/s/files/1/0071/1684/9252/products/ECSET050C_5482_400x400.jpg?v=1676925919", rating: 5, by: "ecoBirdy" },
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
            title: "Bringing Egypt’s Artistry Home",
            description:
              "Anût Cairo’s Journey of Craft and Community with Founder, Goya Gallagher.",
            imageUrl: "https://www.goodeeworld.com/cdn/shop/articles/MGK_254_Goya_Gallagher_B1_1_Malak_Kabbani_2024_1_1_900x.jpg?v=1730387751",
            link: "/stories/egypt-artistry",
          },
          {
            title: "Weaving Beyond Tradition",
            description:
              "Master Weaver Mary Ayinbora’s Journey with Baba Tree.",
            imageUrl: "https://www.goodeeworld.com/cdn/shop/articles/petlamp_gurunsi_28_artisan_Mary_Ayinbogra_Baba_Tree_Basket_Company_1_900x.jpg?v=1730386670",
            link: "/stories/weaving-tradition",
          },
          {
            title: "Haws Tools for Fall Harvesting: A Seasonal Guide",
            description:
              "Vegetable Gardener and Author Rob Smith opens the gate to his autumn garden, a place where heirloom tools and cherished memories intertwine.",
            imageUrl: "https://www.goodeeworld.com/cdn/shop/articles/IMG_2336_1_1_900x.jpg?v=1727297315",
            link: "/stories/fall-harvesting",
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