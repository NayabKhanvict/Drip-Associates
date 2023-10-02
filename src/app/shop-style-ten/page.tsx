import React from "react";
import BannerSlider from "@/components/ShopStyleSix/BannerSlider";
import ProductCategories from "@/components/ShopStyleTen/ProductCategories";
import SpecialOffer from "@/components/ShopStyleTen/SpecialOffer";
import ProductsCategoryStyleTwo from "@/components/ShopStyleTen/ProductsCategoryStyleTwo";
import TrendingProducts from "@/components/ShopStyleTen/TrendingProducts";
import Facility from "@/components/Common/Facility";
import BestSellersProducts from "@/components/ShopStyleTen/BestSellersProducts";
import TestimonialsTwo from "@/components/Common/TestimonialsTwo";
import NewsThree from "@/components/Common/NewsThree";
import Subscribe from "@/components/Common/Subscribe";
import Partner from "@/components/Common/Partner";
import InstagramPhoto from "@/components/Common/InstagramPhoto";
import { home10_bannerData } from "@/constant/home-10_data";

const ShopStyleTen = () => {
  return (
    <>
      <BannerSlider bannerData={home10_bannerData} />

      <ProductCategories />

      <SpecialOffer />

      <ProductsCategoryStyleTwo />

      <TrendingProducts />

      <Facility />

      <BestSellersProducts />

      <TestimonialsTwo />

      <NewsThree />

      <Subscribe />

      <Partner />

      <InstagramPhoto />
    </>
  );
};

export default ShopStyleTen;
