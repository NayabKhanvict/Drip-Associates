import React from "react";
import BannerSlider from "@/components/ShopStyleSix/BannerSlider";
import ProductCategories from "@/components/ShopStyleSix/ProductCategories";
import AllProducts from "@/components/ShopStyleSix/AllProducts";
import ProductsCategoryStyleTwo from "@/components/ShopStyleSix/ProductsCategoryStyleTwo";
import TrendingProducts from "@/components/ShopStyleSix/TrendingProducts";
import BestSeller from "@/components/ShopStyleSix/BestSeller";
import Facility from "@/components/Common/Facility";
import TestimonialsTwo from "@/components/Common/TestimonialsTwo";
import NewsTwo from "@/components/Common/NewsTwo";
import Subscribe from "@/components/Common/Subscribe";
import Partner from "@/components/Common/Partner";
import InstagramPhoto from "@/components/Common/InstagramPhoto";
import { home9_bannerData } from "@/constant/home-9_data";
import data from "@/jsonData/home-9_productData/home_9.json";

const ShopStyleNine = () => {
  return (
    <>
      <BannerSlider bannerData={home9_bannerData} />

      <ProductCategories />

      <AllProducts data={data} />

      <ProductsCategoryStyleTwo />

      <TrendingProducts data={data} />

      <BestSeller data={data} />

      <Facility />

      <TestimonialsTwo />

      <NewsTwo />

      <Subscribe />

      <Partner />

      <InstagramPhoto />
    </>
  );
};

export default ShopStyleNine;
