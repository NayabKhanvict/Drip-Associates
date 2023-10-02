import React from "react";
import BannerSlider from "@/components/ShopStyleSix/BannerSlider";
import ProductCategories from "@/components/ShopStyleSeven/ProductCategories";
import PopularProducts from "@/components/ShopStyleSeven/PopularProducts";
import ProductsCategoryStyleTwo from "@/components/ShopStyleSeven/ProductsCategoryStyleTwo";
import BestSellersProducts from "@/components/ShopStyleSeven/BestSellersProducts";
import Facility from "@/components/Common/Facility";
import TrendingProducts from "@/components/ShopStyleSeven/TrendingProducts";
import TestimonialsTwo from "@/components/Common/TestimonialsTwo";
import NewsThree from "@/components/Common/NewsThree";
import Subscribe from "@/components/Common/Subscribe";
import Partner from "@/components/Common/Partner";
import InstagramPhoto from "@/components/Common/InstagramPhoto";
import { home7_bannerData } from "@/constant/home-7_data";

const ShopStyleSeven = () => {
  return (
    <>
      <BannerSlider bannerData={home7_bannerData} />

      <ProductCategories />

      <PopularProducts />

      <ProductsCategoryStyleTwo />

      <BestSellersProducts />

      <Facility />

      <TrendingProducts />

      <TestimonialsTwo />

      <NewsThree />

      <Subscribe />

      <Partner />

      <InstagramPhoto />
    </>
  );
};

export default ShopStyleSeven;
