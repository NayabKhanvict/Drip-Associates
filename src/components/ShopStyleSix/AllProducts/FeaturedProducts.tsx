"use client";

import React from "react";
import Link from "next/link";
import ProductCard from "../ProductCard";

const FeaturedProducts = ({ featuredData }: any) => {
  return (
    <div className="row">
      {featuredData.map((product: any) => (
        <>
          <div key={product.id} className="col-lg-4 col-md-6 col-sm-6">
            <ProductCard product={product} />
          </div>
        </>
      ))}
    </div>
  );
};

export default FeaturedProducts;
