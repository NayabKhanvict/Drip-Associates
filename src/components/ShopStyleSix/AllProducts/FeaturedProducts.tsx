"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "../ProductCard";

const FeaturedProducts = ({ featuredData }: any) => {
  return (
    <>
      <div className="row">
        <ProductCard data={featuredData} />
      </div>
    </>
  );
};

export default FeaturedProducts;
